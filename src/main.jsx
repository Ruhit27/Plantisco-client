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
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import SecondLayout from './SecondLayout/SecondLayout.jsx';
import Checkout from './Components/CheckOut/Checkout.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Signup from './Authentications/Signup.jsx';
import AuthLayout from './AuthLayout/AuthLayout.jsx';
import Login from './Authentications/Login.jsx';
import PrivateRouter from './privateRouter/PrivateRoute.jsx';
import Blog from './Components/Blogs/Blog.jsx';
import Unknown from './404/Unknown.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },

  {
    path: '/contact',
    element: <SecondLayout></SecondLayout>,
    children: [
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
     


    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/signup',
        element:<Signup></Signup>
      },
      {
        path:'/auth/login',
        element:<Login></Login>
      }
     
    ]
  },
  {
    path: '/admin',
    element: <Admin></Admin>
  },
  {
    path:'/blog',
    element:<Blog></Blog>
  },
  {
    path: '/checkout',
    // path: '/checkout/email',
    element: <Checkout></Checkout>,
    loader:()=>fetch(`http://localhost:3000/purchase`)
  },
  {
    path:'*',
    element:<Unknown></Unknown>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>

  </React.StrictMode>,
)
