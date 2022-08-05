import React from "react";
import { NavLink } from "react-router-dom";
import compair from "./assets/Large COMPAIR logo PNG.png";

const Navbar = ({ auth, username, showSidebar }) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {auth === false && (
          <div>
            <span
              className="navbar-toggler-icon"
              role="button"
              onClick={showSidebar}
            ></span>
          </div>
        )}
        <div className="navbar-collapse collapse w-100 order-1 order-lg-0 dual-collapse2">
          <ul className="navbar-nav me-auto">
            {auth === true && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
            )}
            {auth === true && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/calculator">
                  CO2 Calculator
                </NavLink>
              </li>
            )}
            {auth === true && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/simulation">
                  Scenario Simulation
                </NavLink>
              </li>
            )}
            {auth === true && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="mx-auto order-0">
          <NavLink className="navbar-brand mx-auto" to="/">
            <img src={compair} alt="" width="100" height="28" />
          </NavLink>
        </div>
        <div className="me-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ms-auto">
            {auth === true ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="btn btn-sm btn-primary ms-auto px-4 rounded-pill"
                  >
                    <i className="fa fa-sign-in me-2"></i>Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="btn btn-sm btn-success ms-lg-2 px-4 mt-lg-0 mt-1 rounded-pill"
                  >
                    <i className="fa fa-user-plus me-2"></i>Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <div className="dropdown align-self-end py-1 my-1">
                  <button
                    className="btn btn-sm btn-outline-dark dropdown-toggle px-4 rounded-pill"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {username}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/logout">
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
