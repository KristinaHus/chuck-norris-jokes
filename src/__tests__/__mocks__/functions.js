import { initDB, useIndexedDB } from 'react-indexed-db';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { HOST_URL, JOKE_ROUTE } from '../../config/constansts';
import jokeMock from './joke_mock.json';
import favoritesJokesMock from './joke_favorites_mock.json';

export const mockIndexedDB = async () => {
	initDB.mockReturnValue(() => {});
	useIndexedDB.mockReturnValue({
		add: () => {},
		deleteRecord: (id) => id,
		getByIndex: jest.fn().mockResolvedValue(() => jokeMock),
		getAll: () => favoritesJokesMock
	});
};

export const mockFetchJokesAxiosReq = () => {
	const mock = new MockAdapter(axios);
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	});
	const wrapper = ({ children }) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);

	mock.onGet(`${HOST_URL}${JOKE_ROUTE}`).reply(200, jokeMock);

	return wrapper;
};

export const mockUseNavigate = () => {
	jest.mock('react-router-dom', () => ({
		...jest.requireActual('react-router-dom'),
		useNavigate: () => jest.fn()
	}));
};
