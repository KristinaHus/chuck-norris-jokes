import { useQuery } from 'react-query';

import { getJoke } from '../services/jokes';
import { FETCH_DELAY } from '../config/constansts';

export function useFetchJoke(enabled) {
	return useQuery('joke', () => getJoke(), {
		refetchInterval: FETCH_DELAY,
		enabled
	});
}
