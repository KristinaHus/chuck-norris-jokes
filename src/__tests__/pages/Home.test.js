import { render, screen, waitFor } from '@testing-library/react';

import { Home } from '../../pages/Home';
import { mockFetchJokesAxiosReq, mockIndexedDB } from '../__mocks__/functions';

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
		mockIndexedDB();
		wrapper = mockFetchJokesAxiosReq();
	});
	it('Show loading text', () => {
		render(<Home />, { wrapper });
		expect(screen.queryByTestId('LinearProgress')).toBeTruthy();
	});

	it('Show list of jokes', async () => {
		render(<Home />, { wrapper });
		await waitFor(() => {
			expect(screen.queryByTestId('LinearProgress')).not.toBeTruthy();
			expect(screen.queryByTestId('ListComponent')).toBeTruthy();
		});
	});
});
