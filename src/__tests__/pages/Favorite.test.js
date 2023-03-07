import { render, screen, waitFor } from '@testing-library/react';

import { mockFetchJokesAxiosReq, mockIndexedDB } from '../__mocks__/functions';
import { Favorite } from '../../pages/Favorite';
import mockFavoriteJokes from '../__mocks__/joke_favorites_mock.json';

jest.mock('react-indexed-db', () => {
	const original = jest.requireActual('react-indexed-db'); // Step 2.
	return {
		...original,
		initDB: jest.fn(),
		useIndexedDB: jest.fn()
	};
});

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
	useLocation: () => jest.fn()
}));

describe('Test home page', () => {
	let wrapper;
	beforeAll(() => {
		mockIndexedDB({ favorite: mockFavoriteJokes });
		wrapper = mockFetchJokesAxiosReq();
	});
	it('Should render page', () => {
		render(<Favorite />, { wrapper });
		expect(screen.queryByText('List of your favorite jokes')).toBeTruthy();
	});

	it('Show list of favorite jokes', async () => {
		render(<Favorite />, { wrapper });
		await waitFor(() => {
			expect(screen.queryByTestId('ListComponent')).toBeTruthy();
			expect(screen.queryAllByTestId('ListItem')).toHaveLength(mockFavoriteJokes.length);
		});
	});

	it('Should show all jokes as favorite', async () => {
		render(<Favorite />, { wrapper });
		await waitFor(async () => {
			expect(screen.queryByTestId('ListComponent')).toBeTruthy();
			const favoriteItems = await screen.queryAllByTestId('ListItem');
			expect(screen.queryAllByTestId('FavoriteIcon')).toHaveLength(favoriteItems.length);
		});
	});
});
