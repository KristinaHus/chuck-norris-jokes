import { initDB } from 'react-indexed-db';
import { Helmet } from 'react-helmet';
import { RouterProvider } from 'react-router-dom';

import { DBConfig } from './config/DBConfig';
import { router } from './navigation/router';

initDB(DBConfig);

function App() {
	return (
		<div>
			<Helmet>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Helmet>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
