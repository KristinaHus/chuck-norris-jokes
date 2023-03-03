import { initDB } from 'react-indexed-db';
import { Helmet } from 'react-helmet';

import { Home } from './pages/Home';
import { DBConfig } from './config/DBConfig';

initDB(DBConfig);

function App() {
	return (
		<div>
			<Helmet>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Helmet>
			<Home />
		</div>
	);
}

export default App;
