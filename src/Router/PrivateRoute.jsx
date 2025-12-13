import React from "react";
import { Navigate, useLocation } from "react-router";
import useHooks from "../Context/useHooks";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useHooks();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
