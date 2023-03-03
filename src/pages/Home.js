import { Paper, Container } from '@mui/material';

import { ListComponent } from '../components/List/ListComponent';
import { Header } from '../components/Header';

export const Home = () => {
	return (
		<Container maxWidth="xl">
			<Header title="Check out some random jokes from Chuck Norris" />
			<Paper>
				<ListComponent />
			</Paper>
		</Container>
	);
};
