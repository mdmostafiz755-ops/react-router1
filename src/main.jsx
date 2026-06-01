import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './components/Home.jsx';
import Mobiles from './components/Mobiles.jsx';
import LAptop from './components/LAptop.jsx';
import User from './components/user/User.jsx';
import Todo from './todo.jsx';

const userP=fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json());
const router=createBrowserRouter([
  {
    path: "/", element: <Root></Root>,
    children:[
      {index:true,element:<Home></Home>},
      {path:"mobiles",element:<Mobiles></Mobiles>},
      {path:"laptop",element:<LAptop></LAptop>},
      {path:"user",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>},
        {
          path:"todo",
          element: <Suspense fallback={<h3>Loading...</h3>}>
            <Todo userP={userP}></Todo>
          </Suspense>
        }
    ]
  },
  {path:"about",element: <div>aboutpage</div>},
  {path:"services",element: <div>services</div>},
  {path: "blog",element: <div>blog</div>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
