/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
// global styles
import "./index.css";
// routes/pages
import React from "react";
import Loader from "./loader.jsx";

const FeedsHome = React.lazy(() => import("./pages/Feeds/feedsHome.jsx"));
// const APP = React.lazy(() => import("./App"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage/SignUp"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/Login"));
const DashBoard = React.lazy(() => import("./pages/components/DashBoard.jsx"));
const SingleFeedPage = React.lazy(() =>
  import("./pages/Feeds/singleFeedPage.jsx")
);

const ProfilePostPage = React.lazy(() => import("./pages/profile/components/profilePost.jsx"));
const ProfileVideoPage = React.lazy(() => import("./pages/profile/components/profileVideos.jsx"));

const Categories = React.lazy(() => import("./pages/categories/categories.jsx"));
// import ProductView from "./pages/productView/productView.jsx";
import ProfileHome from "./pages/profile/profileHome.jsx";

import MyPost from "./pages/components/Post.jsx";
import MyVideo from "./pages/components/Video.jsx";

import FeedsTopServices from "./pages/Feeds/components/topVideos.jsx";
import TrendingAds from "./pages/Feeds/components/trendingAds.jsx";

// import SignUpPage from "./pages/SignUpPage/SignUp";
import Layout from "./pages/PerfectWorks/components/layout";
import Works from "./pages/PerfectWorks/Works";
import Detail from "./pages/PerfectWorks/Detail";
import PostAPicture from "./pages/LoginPage/PostAPicture";
import Photography from "./pages/skills/Photographers";
import GoogleCallback from "./GoogleAuth/GoogleCallback";

import Post from "./testingpage/Post.jsx";
import Video from "./testingpage/Video.jsx";
import Fulltext from "./testingpage/Fulltext.jsx";
import Myuploads from "./testingpage/Myupload.jsx";

import Error from "./error.jsx";
import MyVideos from "./testingpage/MyVideos.jsx";
import ProfileEdit from "./pages/profile/components/ProfileEdit.jsx";
import PersonalInfo from "./pages/profile/components/PersonalInfo.jsx";


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
        index: true,
        element: <Suspense fallback={<Loader />}><ProfilePostPage /></Suspense>,
      },
      {
        path: "videos",
        element: <Suspense fallback={<Loader />}><ProfileVideoPage /></Suspense>,
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
    element: (
      <Suspense fallback={<Loader />}>
        <DashBoard />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <MyPost />
      },
      {
        path: "video",
        element: <MyVideo />
      },
      {
        path: "profileEdit",
        element: <ProfileEdit />
      },
      {
        path: "personal-Info",
        element: <PersonalInfo />
      },
      {
        path: "UserProfile/post",
        element: <PostAPicture />,
      },
      {
        path: "postAd",
        element: <Post />,
      },
      {
        path: "postVideo",
        element: <Video />,
      },
      {
        path: "myuploads",
        element: <Myuploads />,
      },
      {
        path: "myvideos",
        element: <MyVideos />,
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
