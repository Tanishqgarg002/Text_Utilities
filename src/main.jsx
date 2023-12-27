import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// import Navbar from './components/navbar.jsx';
// import TextForm from './components/textform';
// import About from './components/about';
// import Alert from './components/alert';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Router
// } from "react-router-dom";

// const router=createBrowserRouter([
//   {
//     path: "/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element: <TextForm showalert={showalert} mode={mode}/>,
//       },
//       {
//         path:"about",
//         element: <About/>
//       }
//     ],
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    {/* <Router> */}
    <App/>
    {/* </Router> */}
  </React.StrictMode>
)
