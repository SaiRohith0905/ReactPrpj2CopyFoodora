import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Error from "./Components/Error";
// import AboutUs from './Components/AboutUs';
import Shimmer from './Components/Shimmer';
import ResMenu from './Components/ResMenu';
import userData from './Utils/userData';
// import Cart from './Components/Cart';
const Cart = lazy(()=>{
  return import('./Components/Cart')
})
const AboutUs = lazy(()=>{
  return import('./Components/AboutUs')
})
const routerconfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
       { path: "/aboutus", element: <Suspense fallback={<Shimmer/>}><AboutUs /></Suspense>, errorElement: <Error /> },
       { path: "/cart", element: <Suspense fallback={<Shimmer/>}><Cart /></Suspense>, errorElement: <Error /> },
       { path: "/resmenu/:id", element: <ResMenu />, errorElement: <Error /> },
  ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={routerconfig}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
