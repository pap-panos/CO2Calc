import React from "react";
import About from "./About";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container-fluid bg-primary" style={{ height: "510px" }}>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1
                className="display-4 fw-bolder mb-4
                 text-center text-white"
              >
                CARBON CALCULATOR
              </h1>
              <p className="lead text-center text-white fs-4 mb-5">
                Carbon Footprint Calculator For Individuals. This carbon
                calculator is provided free to use. Show you care for the
                environment and communities across the World by Carbon
                Offsetting. Reducing emissions is the key solution to tackling
                climate change. Carbon Footprint Calculator works tirelessly on
                your part to shape the agenda for environmental and carbon
                management!
              </p>
              <div className="d-flex justify-content-center">
                <NavLink
                  to="/register"
                  className="btn btn-light rounded-pill px-4 py-2"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
