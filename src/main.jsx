
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
import Login from "./pages/LoginPage/Login";
import UserProfile from "./pages/LoginPage/UserProfile";
import PostAPicture from "./pages/LoginPage/PostAPicture";
import EditProfile from "./pages/LoginPage/EditProfile";
import Photography from "./pages/skills/Photographers";
import DefualtLayout from "./pages/components/DefualtLayout";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GoogleCallback from "./GoogleAuth/GoogleCallback";
import { ContextProvider } from "./contexts/ContextProvider";


const queryClient = new QueryClient()

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
    path: "skills",
    element: <Photography />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  // {
  //   path: "Login/UserProfile",
  //   element: <UserProfile />,
  // },
  // {
  //   path: "Login/UserProfile/EditProfile",
  //   element: <EditProfile />,
  // },
  // {
  //   path: "Login/UserProfile/post",
  //   element: <PostAPicture />,
  // },

  {
    path: "/",
    element: <DefualtLayout />,
    children: [
      {
        path: "dashboard",
        element: <div>USER PROFILE</div>
      },
      {
        path: "dashboard/UserProfile",
        element: <UserProfile />,
      }, 
      {
        path: "dashboard/UserProfile/EditProfile",
        element: <EditProfile />,
      },
      {
        path: "dashboard/UserProfile/post",
        element: <PostAPicture />,
      },
    ]
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
        path: "auth/google",
        element: <GoogleCallback />
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "detail/:detailId",
        element: <Detail />,
      },
      {
        path: "detail/:detailId/signUp",
        element: <SignUp />,
      },
      {
        path: "detail/:detailId/Login",
        element: <Login />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      {/* <QueryClientProvider client={queryClient}> */}
        <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </ContextProvider>
  </React.StrictMode>
);





