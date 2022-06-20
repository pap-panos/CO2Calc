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
          style={{ color: "#000000" }}
        ></FontAwesomeIcon>
      </div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar text-wrap"
          role="button"
          style={{ width: car + "%" }}
        >
          Cars
        </div>
        <div
          className="progress-bar bg-danger text-wrap"
          role="button"
          style={{ width: flight + "%" }}
        >
          Flights
        </div>
        <div
          className="progress-bar bg-success text-wrap"
          role="button"
          style={{ width: train + "%" }}
        >
          Trains
        </div>
        <div
          className="progress-bar bg-warning text-wrap"
          role="button"
          style={{ width: building + "%" }}
        >
          Buildings
        </div>
        <div
          className="progress-bar bg-info text-wrap"
          role="button"
          style={{ width: waste + "%" }}
        >
          Waste
        </div>
      </div>
    </div>
  );
};

export default User;
