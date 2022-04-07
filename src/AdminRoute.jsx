import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ element, role }) => {
  return <div>{role === "admin" ? element : <Navigate to={"/"} />}</div>;
};

export default AdminRoute;
