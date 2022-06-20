import React from "react";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import WhatIs from "./WhatIs";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container-fluid bg-primary py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1
                className="display-4 fw-bolder
                 text-center text-white p-2"
              >
                Carbon Footprint Simulation Dashboard
              </h1>
              <p className="lead text-center text-white fs-4 p-2">
                Together we can achieve clean air for all. Use the Carbon
                Footprint Simulation Dashboard and take action today.
              </p>
              <div className="d-flex justify-content-center p-2">
                <NavLink
                  to="/calculator"
                  className="btn btn-light rounded-pill p-2"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatIs></WhatIs>
      <WhoWeAre></WhoWeAre>
      <Contact></Contact>
    </div>
  );
};

export default Home;
