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
import DashboardLayout from "../layout/DashboardLayout.jsx";
import AdminDashboards from "../Pages/AllDashboard/AdminDashboards.jsx";
import UserDasboards from "../Pages/AllDashboard/UserDasboards.jsx";
import CreatorDasboards from "../Pages/AllDashboard/CreatorDasboards.jsx";
import ContestDetail from "../Pages/AllContest/ContestDetail.jsx";

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

  {
    path:"contest/details",
    element:<ContestDetail/>
  },

  {
    path:"/admin",
    Component:DashboardLayout,
    errorElement:<CodeNotFoundPage/>,
    children:[
      {index:true,element:<AdminDashboards/>},
      {path:"/admin/user-dashboard",element:<UserDasboards/>},
      {path:"/admin/creative-dasboard",element:<CreatorDasboards/>}
    ]
  }

]);

export default Router;
