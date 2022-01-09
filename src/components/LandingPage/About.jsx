import React from "react";
import { NavLink } from "react-router-dom";
import aboutPic from "./assets/about-us.png";

const About = () => {
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
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Companies share a common responsible goal to track and reduce
                carbon emissions 'at source' as much as possible and to
                compensate for unavoidable emissions - via carbon offsetting -
                to render their activities to be net zero carbon/carbon neutral.
                With this action, they protect both environment and their own
                businesses; better sustainability credentials allow them to
                maximise commercial opportunities (from both sales tender and
                operational savings), enhance their brands, engage stakeholders
                and make theirs better businesses to work at.
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

export default About;
