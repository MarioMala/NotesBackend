/** @format */
import './style/global.css';
import './style/theme.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Notes } from './components/Notes/Notes.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Notes />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
