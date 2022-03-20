import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Logout = () => {
  //History Declare
  const history = useNavigate();

  const logout = async () => {
    await Axios.get("/api/users/logout").then(
      (res) => {
        history("/");
        window.location.reload();
      },
      (error) => {
        window.alert("An occured on logout");
        console.log(error);
      }
    );
  };

  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
};

export default Logout;
