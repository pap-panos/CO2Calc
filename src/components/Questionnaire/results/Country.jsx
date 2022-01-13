import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Country = ({ countryRes }) => {
  return (
    <div>
      <div className="d-flex justify-content-center p-1">
        <span className="fs-3">Country</span>
      </div>
      <div className="d-flex justify-content-center p-2">
        <FontAwesomeIcon
          icon={faShoePrints}
          className="fa-3x"
          style={{ color: "#ffc107" }}
        ></FontAwesomeIcon>
      </div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar progress-bar-striped bg-warning"
          role="progressbar"
          style={{ width: countryRes + "%" }}
          aria-valuenow={countryRes}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Country;
