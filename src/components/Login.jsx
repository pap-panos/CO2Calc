import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Henlo World</h1>
      <div className="container rounded bg-white my-3">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center text-white justify-content-center bg-primary rounded-start p-3">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credentials To Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form>
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
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your e-mail with anyone else.
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
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
