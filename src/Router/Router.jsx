import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
import Register from "../Pages/Auth/Register.jsx";
import LogIn from "../Pages/Auth/LogIn.jsx";
import AllContests from "../Pages/AllContest/AllContests.jsx";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "/all-contest",
        Component: AllContests,
      },
      {
        path: "/extra-section",
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

export default Router;
