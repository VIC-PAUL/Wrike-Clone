import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { isAuth } = useContext(AuthContext);
  if (!isAuth) return <Navigate to="/signup"></Navigate>;

  return children;
};

export default PrivateRoute;