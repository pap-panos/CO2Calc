import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Logout = ({ setLogged }) => {
  //History Declare
  const history = useNavigate();

  const logout = async () => {
    await Axios.get(process.env.REACT_APP_BACKEND_URL + "api/users/logout", {
      withCredentials: true,
    }).then(
      (res) => {
        setLogged(false);
        history("/");
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
