import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { useFetchJokes } from '../../hooks/useFetchJokes';
import { HOST_URL, JOKE_ROUTE, LIMIT_BY_VIEW } from '../../config/constansts';
import jokeMock from '../__mocks__/joke_mock.json';

it(`Fetch initial ${LIMIT_BY_VIEW} of jokes`, async () => {
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

	const { result, waitFor } = renderHook(() => useFetchJokes(), { wrapper });

	await waitFor(() => {
		return result.current.isSuccess;
	});
	expect(result.current.data).toHaveLength(LIMIT_BY_VIEW);
	expect(result.current.data).toEqual(Array(LIMIT_BY_VIEW).fill(jokeMock));
	mock.reset();
});
