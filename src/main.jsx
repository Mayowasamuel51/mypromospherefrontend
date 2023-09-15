
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
// global styles
import "./index.css";
// routes/pages
import App from "./App.jsx";
import Home from "./pages/Home";
import SignUp from "./pages/SignUpPage/SignUp";
import Layout from "./pages/PerfectWorks/components/layout";
import Works from "./pages/PerfectWorks/Works";
import Detail from "./pages/PerfectWorks/Detail";
import Login from "./pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "layout",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Works />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "detail/:detailId",
        element: <Detail />,
      },
      {
        path: "detail/:detailId/signUp",
        element: <SignUp />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





