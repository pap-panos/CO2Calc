import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, auth }) => {
  return <div>{auth === true ? element : <Navigate to={"/"} />}</div>;
};

export default ProtectedRoute;
