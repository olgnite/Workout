import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/_variables.scss';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import Navigator from "./components/Navigator";
import { storeConfig } from './store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={storeConfig}>
		<QueryClientProvider client={queryClient}>
			<Navigator />
		</QueryClientProvider>
	</Provider>
);


