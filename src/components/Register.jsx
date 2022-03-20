import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  //History Declare
  const history = useNavigate();

  //User Object
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const { email, username, password } = user;
    await Axios.post("/api/users/register", {
      email,
      username,
      password,
    }).then(
      (res) => {
        console.log(res.status);
        window.alert("Registered Successfully");
        history("/login");
      },
      (error) => {
        window.alert("Already Used Details");
        console.log(error);
      }
    );
  };

  return (
    <div>
      <div className="container rounded bg-white my-3">
        <div className="row">
          <div className="col-lg-6 p-3">
            <h1 className="display-6 fw-bolder mb-1 text-center">REGISTER</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  e-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree to the Terms and Conditions.
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
          <div className="col-lg-6 p-3 d-flex flex-column align-items-center text-white justify-content-center bg-primary rounded-end">
            <h1 className="display-4 fw-bolder">Join Us</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
