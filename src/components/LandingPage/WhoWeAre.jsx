import React from "react";
import { NavLink } from "react-router-dom";
import aboutPic from "./assets/Small COMPAIR Logo PNG.png";

const WhoWeAre = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5 rounded bg-white">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={aboutPic}
                alt="About"
                className="img-fluid rounded w-100 h-100"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-6 mb-3">
                Who <b>We</b> Are
              </h1>
              <p className="lead mb-4">
                COMPAIR is a 3 year project, starting in November 2021, working
                with local authorities and citizens to run citizen science
                experiments to supplement gaps in official air quality data to
                (a) co-create more effective social actions and (b) influence
                city policy. Together these actions will contribute towards
                healthier and greener cities for all.
                <br />
                <br />
                Consisting of 15 organisations from 6 different European
                countries: Belgium, Bulgaria, Germany, Greece, United Kingdom,
                and The Netherlands, the initiative is led by Digital
                Vlaanderen.
              </p>
              <NavLink
                to="/contact"
                className="btn btn-outline-primary rounded-pill px-4 py-2"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
