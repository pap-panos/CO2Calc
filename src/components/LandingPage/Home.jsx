import React from "react";
import About from "./About";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container-fluid bg-primary p-2">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1
                className="display-4 fw-bolder
                 text-center text-white p-2"
              >
                CARBON CALCULATOR
              </h1>
              <p className="lead text-center text-white fs-4 p-2">
                Carbon Footprint Calculator For Individuals. This carbon
                calculator is provided free to use. Show you care for the
                environment and communities across the World by Carbon
                Offsetting. Reducing emissions is the key solution to tackling
                climate change. Carbon Footprint Calculator works tirelessly on
                your part to shape the agenda for environmental and carbon
                management!
              </p>
              <div className="d-flex justify-content-center p-2">
                <NavLink
                  to="/register"
                  className="btn btn-light rounded-pill p-2"
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
