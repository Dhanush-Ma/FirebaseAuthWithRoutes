import React from "react";
import { UserAuth } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
