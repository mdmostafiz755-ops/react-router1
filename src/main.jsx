import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './components/root/Root.jsx'
import Home from './components/Home.jsx'
import Mobiles from './components/Mobiles.jsx'
import Laptop from './components/LAptop.jsx'
import User from './components/user/User.jsx'
import Todo from './todo.jsx'
import Suser from './components/sUser/Suser.jsx';
import Post from './components/post/post.jsx';
import Spost from './components/postDetails/Spost.jsx';

const userP = fetch(
  'https://jsonplaceholder.typicode.com/todos'
).then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "mobiles",
        element: <Mobiles />
      },
      {
        path: "laptop",
        element: <Laptop />
      },

      // ALL USERS
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User />
      },

      // SINGLE USER
      {
        path: "user/:userId",
        loader: ({ params }) => {
          console.log("params:", params);
          console.log("userId:", params.userId);

          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
        },
        element: <Suser />
      },
      {
        path: 'post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post />
      },
      {
        path: 'post/:postId',
        loader: ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        },
        element: <Spost></Spost>
      },

      {
        path: "todo",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Todo userP={userP} />
          </Suspense>
        )
      }
    ]
  },

  { path: "about", element: <div>about page</div> },
  { path: "services", element: <div>services</div> },
  { path: "blog", element: <div>blog</div> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);