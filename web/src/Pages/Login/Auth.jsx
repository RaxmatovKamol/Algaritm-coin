import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export const Auth = () => {
  const auth = localStorage.getItem("token") || false;
  const location = useLocation();

  if (auth) return <Outlet />;
  return <Navigate to="/login" state={{ from: location }} />;
};
