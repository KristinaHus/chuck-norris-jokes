import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = () => {
		navigate('/favorite');
	};

	const goBack = () => {
		navigate(-1);
	};

	return (
		<AppBar position="static">
			<Toolbar color="primary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					{location.pathname !== '/' ? (
						<IconButton
							size="large"
							aria-label="see favorites"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={goBack}
							color="inherit">
							<ArrowBackIcon />
						</IconButton>
					) : null}
					<Typography variant="h6" color="inherit" component="div">
						{title}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center'
					}}>
					<Typography variant="h8" color="white" component="div">
						My Favorites
					</Typography>
					<IconButton
						size="large"
						aria-label="see favorites"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleClick}
						color="inherit">
						<FavoriteIcon />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	title: PropTypes.string
};
