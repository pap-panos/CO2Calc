import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const User = ({ car, flight, train, building, waste }) => {
  return (
    <div>
      <div className="d-flex justify-content-center p-1">
        <span className="fs-3">User</span>
      </div>
      <div className="d-flex justify-content-center p-2">
        <FontAwesomeIcon
          icon={faShoePrints}
          className="fa-3x"
          style={{ color: "#0d6efd" }}
        ></FontAwesomeIcon>
      </div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar text-wrap"
          role="progressbar"
          style={{ width: car + "%" }}
          aria-valuenow={car}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Cars
        </div>
        <div
          className="progress-bar bg-danger text-wrap"
          role="progressbar"
          style={{ width: flight + "%" }}
          aria-valuenow={flight}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Flights
        </div>
        <div
          className="progress-bar bg-success text-wrap"
          role="progressbar"
          style={{ width: train + "%" }}
          aria-valuenow={train}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Trains
        </div>
        <div
          className="progress-bar bg-warning text-wrap"
          role="progressbar"
          style={{ width: building + "%" }}
          aria-valuenow={building}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Buildings
        </div>
        <div
          className="progress-bar bg-secondary text-wrap"
          role="progressbar"
          style={{ width: waste + "%" }}
          aria-valuenow={waste}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Waste
        </div>
      </div>
    </div>
  );
};

export default User;
