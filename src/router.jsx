/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
// global styles
import "./index.css";
// routes/pages
import React from "react";
import Loader from "./loader.jsx";

const FeedsHome = React.lazy(()=> import("./pages/Feeds/feedsHome.jsx"))
const APP = React.lazy(()=> import("./App"))
const SignUpPage = React.lazy(()=> import("./pages/SignUpPage/SignUp"))
const LoginPage = React.lazy(()=> import("./pages/LoginPage/Login"))
const DashBoard = React.lazy(()=> import("./pages/components/DashBoard.jsx"))
import ProfileHome from "./pages/profile/profileHome.jsx";

import FeedsTopServices from "./pages/Feeds/components/topServices.jsx";
import TrendingAds from "./pages/Feeds/components/trendingAds.jsx";

// import SignUpPage from "./pages/SignUpPage/SignUp";
import Layout from "./pages/PerfectWorks/components/layout";
import Works from "./pages/PerfectWorks/Works";
import Detail from "./pages/PerfectWorks/Detail";
import PostAPicture from "./pages/LoginPage/PostAPicture";
import EditProfile from "./pages/LoginPage/EditProfile";
import Photography from "./pages/skills/Photographers";
import DashBoardLayout from "./pages/Layout/DashBoardLayout.jsx";
import GoogleCallback from "./GoogleAuth/GoogleCallback";


import TopServices from "./pages/components/TopServices.jsx"
import TrendingSkills from "./pages/components/TrendingSkills.jsx"
import TopSkillsLagos from "./pages/components/TopSkillsinLagos.jsx"
import Post from "./testingpage/Post.jsx";
import Video from "./testingpage/Video.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}><FeedsHome /></Suspense>,
    children: [
      {
        index: true,
        element: <TrendingAds />
      },
      {
        path: "/top-services",
        element: <FeedsTopServices />
      }
    ]
  },
  {
    path: "/profile/:cusName",
    element: <ProfileHome />
  },
  {
    path: "/home",
    element: <Suspense fallback={<Loader />}><APP /></Suspense>,
    children: [
      {
        index: true,
        element: <TopServices />
      },
      {
        path: "trendingSkills",
        element: <TrendingSkills />
      },
      {
        path: "topSkillsLagos",
        element: <TopSkillsLagos />
      }
    ]
  },
  {
    path: "skills",
    element: <Photography />,
  },
  {
    path: "Login",
    element:  <Suspense fallback={<Loader/>}><LoginPage /></Suspense>,
  },
  {
    path: "signup",
    element: <Suspense fallback={<Loader/>}><SignUpPage /></Suspense> ,
  },
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Loader/>}><DashBoard /></Suspense>,
      },
      {
        path: "EditProfile",
        element: <EditProfile />,
      },
      {
        path: "UserProfile/post",
        element: <PostAPicture />,
      },
      {
        path: "post",
        element: <Post />
      },
      {
        path:'video',
        element:<Video/>
      }
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
        element: <Suspense fallback={<Loader/>}><SignUpPage /></Suspense> ,
      },
      {
        path: "Login",
        element:  <Suspense fallback={<Loader/>}><LoginPage /></Suspense>,
      },
      {
        path: "detail/:detailId",
        element: <Detail />,
      },
      // {
      //   path: "detail/:detailId/signUp",
      //   element: <SignUp />,
      // },
      {
        path: "detail/:detailId/Login",
        element:  <Suspense fallback={<Loader/>}><LoginPage /></Suspense>,
      },
    ],
  },
]);

export default router;




