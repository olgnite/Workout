import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/_variables.scss'
import App from "./App";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Auth from "./pages/Auth/Auth";
import NewWorkout from "./pages/NewWorkout/NewWorkout";
import { Provider } from 'react-redux';
import { storeConfig } from './store';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NewExercise from './pages/NewExercise/NewExercise';
import Navigator from "./components/Navigator";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={storeConfig}>
		<QueryClientProvider client={queryClient}>
			<Navigator/>
		</QueryClientProvider>
	</Provider>
);


