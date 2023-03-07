import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Favorite } from '../pages/Favorite';

export const routerConfig = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/favorite',
		element: <Favorite />
	}
];

export const router = createBrowserRouter(routerConfig);
