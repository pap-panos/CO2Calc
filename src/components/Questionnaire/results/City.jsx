import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const City = ({ cityRes }) => {
  return (
    <div>
      <div className="d-flex justify-content-center p-1">
        <span className="fs-3">City</span>
      </div>
      <div className="d-flex justify-content-center p-2">
        <FontAwesomeIcon
          icon={faShoePrints}
          className="fa-3x"
          style={{ color: "#198754" }}
        ></FontAwesomeIcon>
      </div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: cityRes + "%" }}
          aria-valuenow={cityRes}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default City;
