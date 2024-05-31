import Home from '@pages/Home.tsx';
import store from '~/store';
import '@styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Proposer from './pages/Proposer';
import Responder from './pages/Responder';

import socket from './socket';
import NotFound from './pages/NotFound';
import Agreement from './pages/Agreement';

import { setupSocket } from './socket/setup';
import { getServerState } from './actions';
setupSocket(socket);

getServerState();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/proposer',
		element: <Proposer />
	},
	{
		path: '/responder',
		element: <Responder />
	},
	{
		path: '/agreement',
		element: <Agreement />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
