import { useQuery } from 'react-query';
import { getJokes } from '../services/jokes';

export function useFetchJokes() {
	return useQuery('jokes', () => getJokes(), {
		refetchOnWindowFocus: false
	});
}
