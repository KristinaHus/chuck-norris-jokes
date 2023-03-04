import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Paper, Container, LinearProgress } from '@mui/material';

import { ListComponent } from '../components/List/ListComponent';
import { Header } from '../components/Header';
import { getJoke, getJokes } from '../services/jokes';
import { removeLatest } from '../helpers/filters';

export const Home = () => {
	const [jokes, setJokes] = useState();

	const { data, isLoading, isError } = useQuery('jokes', () => getJokes(), {
		refetchOnWindowFocus: false
	});
	const { data: joke } = useQuery('joke', () => getJoke(), {
		refetchInterval: 1000 * 5
	});

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

	return (
		<Container maxWidth="xl">
			<Header title="Check out some random jokes about Chuck Norris" />
			{isLoading ? (
				<LinearProgress />
			) : (
				<Paper>
					<ListComponent data={jokes} />
				</Paper>
			)}
		</Container>
	);
};
