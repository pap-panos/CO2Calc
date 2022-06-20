import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Country = ({ countryRes, country }) => {
  return (
    <div>
      <div className="d-flex justify-content-center p-1">
        <span className="fs-3">{country ? country : "Country"}</span>
      </div>
      <div className="d-flex justify-content-center p-2">
        <FontAwesomeIcon
          icon={faShoePrints}
          className="fa-3x"
          style={{ color: "#000000" }}
        ></FontAwesomeIcon>
      </div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar bg-primary text-wrap"
          role="button"
          style={{ width: countryRes / 5 + "%" }}
        >
          Cars
        </div>
        <div
          className="progress-bar bg-danger text-wrap"
          role="button"
          style={{ width: countryRes / 5 + "%" }}
        >
          Flights
        </div>
        <div
          className="progress-bar bg-success text-wrap"
          role="button"
          style={{ width: countryRes / 5 + "%" }}
        >
          Trains
        </div>
        <div
          className="progress-bar bg-warning text-wrap"
          role="button"
          style={{ width: countryRes / 5 + "%" }}
        >
          Buildings
        </div>
        <div
          className="progress-bar bg-info text-wrap"
          role="button"
          style={{ width: countryRes / 5 + "%" }}
        >
          Waste
        </div>
      </div>
    </div>
  );
};

export default Country;
