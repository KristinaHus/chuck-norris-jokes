import { useEffect, useState } from 'react';

import { removeLatest } from '../helpers/filters';
import { useFetchJoke } from './useFetchJoke';
import { useFetchJokes } from './useFetchJokes';
import { FETCH_DELAY } from '../config/constansts';

export function useGetJokes() {
	const [jokes, setJokes] = useState([]);
	const [isJokeFetchEnabled, setIsJokeFetchEnabled] = useState(false);

	const { data, isLoading, isError } = useFetchJokes();
	const { data: joke } = useFetchJoke(isJokeFetchEnabled);

	useEffect(() => {
		setTimeout(() => {
			setIsJokeFetchEnabled(true);
		}, FETCH_DELAY);
	}, []);

	useEffect(() => {
		if (data && data.length > 0 && !isError) {
			setJokes(data);
		}
	}, [data]);

	useEffect(() => {
		if (joke && jokes) {
			const jokesList = [joke, ...removeLatest(jokes)];
			setJokes(jokesList);
		}
	}, [joke]);

	return { jokes, isLoading };
}
