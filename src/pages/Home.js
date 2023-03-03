import { Paper, Container, Toolbar, Typography, AppBar } from '@mui/material';

import { ListComponent } from '../components/List/ListComponent';

export const Home = () => {
	return (
		<Container maxWidth="md">
			<AppBar position="static">
				<Toolbar color="primary">
					<Typography variant="h6" color="inherit" component="div">
						Check out some random jokes from Chuck Norris
					</Typography>
				</Toolbar>
			</AppBar>
			<Paper>
				<ListComponent />
			</Paper>
		</Container>
	);
};
