
import { createBrowserRouter } from "react-router-dom";
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
import GoogleCallback from "./GoogleAuth/GoogleCallback";


import TopServices from "./pages/components/TopServices.jsx"
import TrendingSkills from "./pages/components/TrendingSkills.jsx"
import TopSkillsLagos from "./pages/components/TopSkillsinLagos.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <TopServices />
      },
      {
        path: "/trendingSkills",
        element: <TrendingSkills />
      },
      {
        path: "/topSkillsLagos",
        element: <TopSkillsLagos />
      }
    ]
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
  {
    path: "dashboard",
    element: <DefualtLayout />,
    children: [
      // {
      //   path: "dashboard",
      //   element: <Navigate    to="dashboard" />
      // },
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "UserProfile/EditProfile",
        element: <EditProfile />,
      },
      {
        path: "UserProfile/post",
        element: <PostAPicture />,
      },
    ]
  },
  {
    path: "/layout",
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

export default router;




