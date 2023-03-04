import axios from 'axios';

import { LIMIT_BY_VIEW } from '../config/constansts';

export const getJoke = async () => {
	const res = await axios.get('https://api.chucknorris.io/jokes/random');
	return res.data;
};

export const getJokes = async (amount = LIMIT_BY_VIEW) => {
	const responses = [];
	for (let i = 0; i < amount; i++) {
		const res = await axios.get('https://api.chucknorris.io/jokes/random');
		responses.push(res.data);
	}
	return responses;
};
