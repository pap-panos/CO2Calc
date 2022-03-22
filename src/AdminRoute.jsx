import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ element, username }) => {
  return <div>{username === "admin" ? element : <Navigate to={"/"} />}</div>;
};

export default AdminRoute;
