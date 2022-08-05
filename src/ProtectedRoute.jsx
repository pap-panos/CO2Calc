import React from "react";
import Home from "./components/LandingPage/Home";

const ProtectedRoute = ({ element, auth }) => {
  if (auth) {
    return element;
  } else return <Home />;
};

export default ProtectedRoute;
