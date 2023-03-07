import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { enableFetchMocks } from 'jest-fetch-mock';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import '@testing-library/jest-dom';

import { mockFetchJokesAxiosReq, mockIndexedDB } from '../__mocks__/functions';
import { routerConfig } from '../../navigation/router';

enableFetchMocks();

jest.mock('react-indexed-db', () => {
	const original = jest.requireActual('react-indexed-db'); // Step 2.
	return {
		...original,
		initDB: jest.fn(),
		useIndexedDB: jest.fn()
	};
});

describe('Test router', () => {
	let wrapper;
	beforeAll(() => {
		mockIndexedDB();
		wrapper = mockFetchJokesAxiosReq();
	});
	it('Should navigate from Home to Favorite', async () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/']
		});
		render(<RouterProvider router={router} />, { wrapper });

		expect(screen.getByText('Check out some random jokes about Chuck Norris')).toBeInTheDocument();
		await waitFor(async () => {
			const favoriteBtn = screen.getByTestId('FavoriteBtn');
			expect(favoriteBtn).toBeInTheDocument();
			fireEvent.click(favoriteBtn);
			expect(screen.getByText('List of your favorite jokes')).toBeInTheDocument();
		});
	});

	it('Should navigate back from Favorite to Home', async () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/']
		});
		render(<RouterProvider router={router} />, { wrapper });

		expect(screen.getByText('Check out some random jokes about Chuck Norris')).toBeInTheDocument();
		await waitFor(async () => {
			const favoriteBtn = screen.getByTestId('FavoriteBtn');
			expect(favoriteBtn).toBeInTheDocument();
			fireEvent.click(favoriteBtn);
			expect(screen.getByText('List of your favorite jokes')).toBeInTheDocument();
			const backBtn = screen.getByTestId('BackBtn');
			fireEvent.click(backBtn);
			expect(
				screen.getByText('Check out some random jokes about Chuck Norris')
			).toBeInTheDocument();
		});
	});
});
