import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
import Register from "../Pages/Auth/Register.jsx";
import LogIn from "../Pages/Auth/LogIn.jsx";
import AllContests from "../Pages/AllContest/AllContests.jsx";
import CodeNotFoundPage from "../Pages/ErrorPage/CodeNotFoundPage.jsx";
import Probleamsheet from "../Pages/Static/Probleamsheet.jsx";
import WhyJoinContest from "../Pages/Static/WhyJoinContest.jsx";
import Blog from "../Pages/Static/Blog.jsx";
import PrivateRouter from "./PrivateRoute.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <CodeNotFoundPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "/all-contest",
        element: <PrivateRouter>
                  <AllContests />
                </PrivateRouter> ,
      },
      {
        path: "/whyjoincontest",
        element: <WhyJoinContest/>
      },
      {
        path: "/probleamsheet",
        element: <PrivateRouter>
                  <Probleamsheet/>
                </PrivateRouter>
      },
      {
        path: "/blogs",
        element: <PrivateRouter>
                  <Blog/>
                </PrivateRouter>
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
