import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './HomeComp/Home/Home.jsx';
import Admin from './Admin/Admin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    path:'/admin',
    element:<Admin></Admin>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
