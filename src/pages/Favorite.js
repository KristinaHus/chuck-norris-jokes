import { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { Container, Paper } from '@mui/material';

import { Header } from '../components/Header';
import { ListComponent } from '../components/List/ListComponent';

export const Favorite = () => {
	const [favorites, setFavorites] = useState([]);
	const { getAll } = useIndexedDB('favorite');

	useEffect(() => {
		fetchFavorites();
	}, []);

	const fetchFavorites = async () => {
		console.log('fetchFavorites');
		const favorites = await getAll();
		setFavorites(favorites);
	};

	return (
		<Container maxWidth="xl">
			<Header title="List of your favorite jokes" />
			<Paper>
				{console.log('favorites', favorites.length)}
				<ListComponent data={favorites} onPress={fetchFavorites} />
			</Paper>
		</Container>
	);
};
