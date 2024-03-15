import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './Pages/App.jsx';
import Winkelwagen from "./Pages/Winkelwagen.jsx";
import Bestellingen from "@/Pages/Bestellingen.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App active='/domeinen' />,
    },
    {
        path: '/domeinen',
        element: <App active='/domeinen' />,
    },
    {
        path: '/winkelwagen',
        element: <Winkelwagen active='/winkelwagen' />,
    },
    {
        path: '/bestellingen',
        element: <Bestellingen active='/bestellingen' />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <RouterProvider router={router} />
);
