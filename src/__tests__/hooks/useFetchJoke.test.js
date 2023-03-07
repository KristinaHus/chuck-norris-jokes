import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { useFetchJoke } from '../../hooks/useFetchJoke';
import { HOST_URL, JOKE_ROUTE } from '../../config/constansts';
import jokeMock from '../__mocks__/joke_mock.json';

it('Fetch joke', async () => {
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

	const { result, waitFor } = renderHook(() => useFetchJoke(), { wrapper });

	await waitFor(() => {
		return result.current.isSuccess;
	});

	expect(result.current.data).toEqual(jokeMock);
	mock.reset();
});
