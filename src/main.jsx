import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/TransactFront/",
    element: <App />,
    children:[
      {
        path: "/TransactFront/",
        element: <Home/>
      }
    ] 
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);