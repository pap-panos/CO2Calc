import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white bg-secondary mt-auto">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-4">
              <h4>CO2 Footprint Calculator</h4>
            </div>

            <div className="col-2">
              <h5>Our work</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/" className="nav-link p-0 text-white">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <span className="nav-link p-0 text-white">Features</span>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/about" className="nav-link p-0 text-white">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Join us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/contact" className="nav-link p-0 text-white">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <span className="nav-link p-0 text-white">FAQs</span>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/login" className="nav-link p-0 text-white">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/register" className="nav-link p-0 text-white">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h6>
                Take our survey to find out how you compare to your country
                average and find out how you can impact and be part of future
                reduction by offsetting!
              </h6>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 mt-4 border-top">
            <p>
              ©2022 University of the Aegean - ICSD Department. All rights
              reserved.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <span className="link-light">
                  <i className="fa fa-facebook fa-2x"></i>
                </span>
              </li>
              <li className="ms-3">
                <span className="link-light">
                  <i className="fa fa-instagram fa-2x"></i>
                </span>
              </li>
              <li className="ms-3">
                <span className="link-light">
                  <i className="fa fa-twitter fa-2x"></i>
                </span>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
