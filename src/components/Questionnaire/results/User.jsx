import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const User = ({ car, motorbike }) => {
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
          Car
        </div>
        <div
          className="progress-bar bg-danger text-wrap"
          role="progressbar"
          style={{ width: motorbike + "%" }}
          aria-valuenow={motorbike}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Motorbike
        </div>
      </div>
    </div>
  );
};

export default User;