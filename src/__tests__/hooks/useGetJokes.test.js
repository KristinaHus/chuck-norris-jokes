import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { useGetJokes } from '../../hooks/useGetJokes';
import { HOST_URL, JOKE_ROUTE, LIMIT_BY_VIEW } from '../../config/constansts';
import jokeMock from '../__mocks__/joke_mock.json';

describe('useGetJokes', () => {
	it(`Jokes should be an array of ${LIMIT_BY_VIEW} items`, async () => {
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

		const { result, waitFor, waitForValueToChange } = renderHook(() => useGetJokes(), { wrapper });

		expect(result.current.jokes).toHaveLength(0);

		await waitForValueToChange(() => result.current);
		await waitFor(() => {
			expect(result.current.jokes).toHaveLength(LIMIT_BY_VIEW);
			return result.current;
		});
	});
});
