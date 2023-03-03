import { Header } from '../components/Header';
import { Container, Paper } from '@mui/material';
import { ListComponent } from '../components/List/ListComponent';

export const Favorite = () => {
	return (
		<Container maxWidth="xl">
			<Header title="List of your favorite jokes" />
			<Paper>
				<ListComponent />
			</Paper>
		</Container>
	);
};
