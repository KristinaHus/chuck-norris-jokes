import axios from 'axios';

import { LIMIT_BY_VIEW, HOST_URL, JOKE_ROUTE } from '../config/constansts';

export const getJoke = async () => {
	const res = await axios.get(`${HOST_URL}${JOKE_ROUTE}`);
	return res.data;
};

export const getJokes = async (amount = LIMIT_BY_VIEW) => {
	try {
		const req = [];
		for (let i = 0; i < amount; i++) {
			req.push(axios.get(`${HOST_URL}${JOKE_ROUTE}`));
		}
		const responses = await Promise.all(req);
		return responses.map((item) => item.data);
	} catch (e) {
		console.log('Error get initial jokes', e);
	}
};
