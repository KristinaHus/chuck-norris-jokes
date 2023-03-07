import { useIndexedDB } from 'react-indexed-db';
import { useEffect, useState } from 'react';

import { MAX_COMMENTS_AMOUNT } from '../config/constansts';

export function useUpdateFavorite(item) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [error, setError] = useState('');
	const { add, deleteRecord, getByIndex, getAll } = useIndexedDB('favorite');

	useEffect(() => {
		getAllFavorites();
	}, []);

	const fetchFavorites = async () => {
		return getAll();
	};

	const getAllFavorites = async () => {
		const favorites = await fetchFavorites();
		if (
			favorites.findIndex((favorite) => {
				return favorite.id === item.id;
			}) > -1
		) {
			setIsFavorite(true);
		}
	};

	const updateFavorite = async () => {
		const favorites = await fetchFavorites();
		const isMaxReached = favorites.length >= MAX_COMMENTS_AMOUNT;
		if (error) {
			setError('');
		}

		setIsFavorite((favorite) => {
			if (!favorite) {
				if (isMaxReached) {
					setError(
						'You already have the maximum amount of favorite jokes. Remove one to be able to add a new one.'
					);
				} else {
					add({ id: item.id, value: item.value }).then(
						(id) => {
							console.log('ID Generated: ', id);
						},
						(error) => {
							console.log(error);
						}
					);
				}
			} else {
				getByIndex('id', item.id).then((dbRecord) => {
					deleteRecord(dbRecord._id);
				});
			}
			return isMaxReached ? false : !favorite;
		});
	};

	return { isFavorite, updateFavorite, error };
}
