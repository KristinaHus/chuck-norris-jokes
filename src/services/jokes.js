import axios from 'axios';

import { LIMIT_BY_VIEW, HOST_URL, JOKE_ROUTE } from '../config/constansts';

export const getJoke = async () => {
	const res = await axios.get(`${HOST_URL}${JOKE_ROUTE}`);
	return res.data;
};

export const getJokes = async (amount = LIMIT_BY_VIEW) => {
	const responses = [];
	for (let i = 0; i < amount; i++) {
		const res = await axios.get(`${HOST_URL}${JOKE_ROUTE}`);
		responses.push(res.data);
	}
	return responses;
};
