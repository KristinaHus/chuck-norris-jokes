import { Paper, Container, LinearProgress } from '@mui/material';

import { ListComponent } from '../components/List/ListComponent';
import { Header } from '../components/Header';
import { useGetJokes } from '../hooks/useGetJokes';

export const Home = () => {
	const { jokes, isLoading } = useGetJokes();

	return (
		<Container maxWidth="xl">
			<Header title="Check out some random jokes about Chuck Norris" />
			{isLoading ? (
				<LinearProgress data-testid="LinearProgress" />
			) : (
				<Paper data-testid="ListComponent">
					<ListComponent data={jokes} />
				</Paper>
			)}
		</Container>
	);
};
