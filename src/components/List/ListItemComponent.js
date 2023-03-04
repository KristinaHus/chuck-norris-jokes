import { useEffect, useState } from 'react';
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Snackbar,
	Alert
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';

import { useUpdateFavorite } from '../../hooks/useUpdateFavorite';

export const ListItemComponent = ({ item, onPress }) => {
	const [isError, setIsError] = useState(false);
	const [isFavorite, updateFavorite, error] = useUpdateFavorite(item);

	useEffect(() => {
		setIsError(!!error);
	}, [error]);

	const handleClose = () => {
		setIsError(false);
	};

	const handleClick = () => {
		updateFavorite();
		setIsError(!!error);
		if (onPress) {
			setTimeout(() => {
				onPress();
			}, 600);
		}
	};

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}</ListItemIcon>
				<ListItemText primary={item.value} />
			</ListItemButton>
			<Snackbar
				open={isError}
				autoHideDuration={1000 * 3}
				onClose={handleClose}
				// message={error}
				// action={action}
			>
				<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
					{error}
				</Alert>
			</Snackbar>
		</ListItem>
	);
};

ListItemComponent.propTypes = {
	item: PropTypes.object,
	onPress: PropTypes.func
};
