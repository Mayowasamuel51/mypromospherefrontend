/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
// global styles
import "./index.css";
// routes/pages
import React from "react";
import Loader from "./loader.jsx";

const FeedsHome = React.lazy(() => import("./pages/Feeds/feedsHome.jsx"));
const APP = React.lazy(() => import("./App"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage/SignUp"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/Login"));
const DashBoard = React.lazy(() => import("./pages/components/DashBoard.jsx"));
const SingleFeedPage = React.lazy(() =>
  import("./pages/Feeds/singleFeedPage.jsx")
);

import ProfilePost from "./pages/profile/components/profilePost.jsx";
import ProfileVideos from "./pages/profile/components/profileVideos.jsx";

const Categories = React.lazy(() => import("./pages/categories/categories.jsx"));
import ProductView from "./pages/productView/productView.jsx";
import ProfileHome from "./pages/profile/profileHome.jsx";

import FeedsTopServices from "./pages/Feeds/components/topVideos.jsx";
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

import TopServices from "./pages/components/TopServices.jsx";
import TrendingSkills from "./pages/components/TrendingSkills.jsx";
import TopSkillsLagos from "./pages/components/TopSkillsinLagos.jsx";
import Post from "./testingpage/Post.jsx";
import Video from "./testingpage/Video.jsx";
import Fulltext from "./testingpage/Fulltext.jsx";
import Myuploads from "./testingpage/Myupload.jsx";

import Error from "./error.jsx";
import MyVideos from "./testingpage/MyVideos.jsx";
import ProfileEdit from "./pages/LoginPage/component/ProfileEdit.jsx";
import PersonalInfo from "./pages/LoginPage/component/PersonalInfo.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}><FeedsHome /></Suspense>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <TrendingAds />,
      },
      {
        path: "/top-videos",
        element: <FeedsTopServices />,
      },
    ],
  },
  {
    path: "/category/:category",
    element: <Suspense fallback={<Loader />}><Categories /></Suspense>,
  },
  {
    path: "feed/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <SingleFeedPage />
      </Suspense>
    ),
  },
  {
    path: "/profile/user/:id",
    element: <ProfileHome />,
    children: [
      {
        index : true,
        element : <ProfilePost />
      },
      {
        path : "videos",
        element: <ProfileVideos />
      }
    ]
  },
  {
    path: "skills",
    element: <Photography />,
  },
  {
    path: "auth/google",
    element: <GoogleCallback />,
  },
  {
    path: "Login",
    element: (
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: "/full",
    element: <Fulltext />,
  },
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <DashBoard />
          </Suspense>
        ),
      },
      {
        path: "EditProfile",
        element: <EditProfile />,
        children: [
          {
            index: true,
            element: <ProfileEdit />
          },
          {
            path: "personal-Info",
            element: <PersonalInfo />
          }
        ]
      },
      {
        path: "UserProfile/post",
        element: <PostAPicture />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "myuploads",
        element: <Myuploads />,
      },
      {
        path: "myvideos",
        element: <MyVideos />,
      },
      {
        path: "video",
        element: <Video />,
      },
    ],
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
        element: <GoogleCallback />,
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: "Login",
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
