import { initDB } from 'react-indexed-db';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { DBConfig } from './config/DBConfig';
import { router } from './navigation/router';

initDB(DBConfig);
const queryClient = new QueryClient();

function App() {
	return (
		<div>
			<Helmet>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Helmet>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</div>
	);
}

export default App;
