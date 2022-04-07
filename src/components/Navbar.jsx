import React from "react";
import { NavLink } from "react-router-dom";
import compair from "./assets/Large COMPAIR logo PNG.png";

const Navbar = ({ auth, username, role }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand h1 p-0 m-0">
          <img
            src={compair}
            alt=""
            width="100"
            height="28"
            className="d-inline-block align-text-bottom"
          />
          CO2 Calculator
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 pt-2 ps-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/questions">
                Calculate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-end">
            {auth === true ? (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-primary ms-auto px-4 rounded-pill"
                >
                  <i className="fa fa-sign-in me-2"></i>Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-secondary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2"></i>Register
                </NavLink>
              </>
            ) : (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-dark dropdown-toggle ms-2 px-4 rounded-pill"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user me-2"></i>
                    {username}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    {role === "admin" && (
                      <>
                        <li>
                          <NavLink className="dropdown-item" to="/users">
                            Users
                          </NavLink>
                        </li>
                      </>
                    )}
                    <li>
                      <NavLink className="dropdown-item" to="/account">
                        Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/logout">
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
