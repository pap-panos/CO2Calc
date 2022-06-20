import React from "react";
import { NavLink } from "react-router-dom";

const WhatIs = () => {
  return (
    <section id="whatis">
      <div className="container my-5 py-5 rounded bg-white">
        <div className="row justify-content-center">
          <div className="col-11">
            <h1 className="display-6 mb-3 py-1 text-center">
              What is this <b>Carbon Footprint Simulation Dashboard</b>
            </h1>
            <p className="lead mb-4">
              The Carbon Footprint Simulation Dashboard consists of two tools.
              The first one is the Carbon Footprint Calculator. This tool is
              meant to help citizens understand how they affect their carbon
              footprint through their daily activities, as well as provide
              recommendations on how they can reduce their carbon footprint.
              <br />
              <br />
              The second tool is the Scenario Simulation Dashboard. This tool
              allows citizens to participate in policy making. It presents a set
              if actions they are willing to make, as well as actions they are
              willing to accept from the government with the purpose of reducing
              carbon emissions. Citizens can choose which actions they believe
              they are willing to adopt and that creates a scenario they can
              submit, which policy makers can gain insight from.
            </p>
            <div className="d-flex justify-content-center py-2">
              <NavLink
                to="/register"
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Join Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
