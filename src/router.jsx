
import { createBrowserRouter } from "react-router-dom";
// global styles
import "./index.css";
// routes/pages
import App from "./App.jsx";
import SignUp from "./pages/SignUpPage/SignUp";
import Layout from "./pages/PerfectWorks/components/layout";
import Works from "./pages/PerfectWorks/Works";
import Detail from "./pages/PerfectWorks/Detail";
import Login from "./pages/LoginPage/Login";
import PostAPicture from "./pages/LoginPage/PostAPicture";
import EditProfile from "./pages/LoginPage/EditProfile";
import Photography from "./pages/skills/Photographers";
import DashBoardLayout from "./pages/Layout/DashBoardLayout.jsx";
import DashBoard from "./pages/components/DashBoard.jsx";
import GoogleCallback from "./GoogleAuth/GoogleCallback";


import TopServices from "./pages/components/TopServices.jsx"
import TrendingSkills from "./pages/components/TrendingSkills.jsx"
import TopSkillsLagos from "./pages/components/TopSkillsinLagos.jsx"
import Post from "./testingpage/Post.jsx";
import AllPost from "./pages/LoginPage/component/Post.jsx";
import Saved from "./pages/LoginPage/component/Saved.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "EditProfile",
        element: <EditProfile />,
      },
      {
        path: "UserProfile/post",
        element: <PostAPicture />,
      },
    ]
    // children : [
    //   {
    //     path: "dashboard",
    //     element: <DashBoard />,
    //     children : [
    //       {
    //         index: true,
    //         element: <AllPost />
    //       },
    //       {
    //         path: "saved",
    //         element: <Saved />
    //       },
    //       {
    //         path:"post",
    //         element:<Post/>
    //       }, 
    //       {
    //         path: "EditProfile",
    //         element: <EditProfile />,
    //       },
    //       {
    //         path: "UserProfile/post",
    //         element: <PostAPicture />,
    //       },
    //     ]
    //   }
    // ]
  },
  {
    path: "dashboard",
    element: <DashBoard />,
   
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




