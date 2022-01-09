import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div
      className="row d-flex align-items-center justify-content-center"
      style={{ height: "5rem" }}
    >
      <div
        className="col-11 col-lg-10 d-flex align-items-center justify-content-center bg-white rounded"
        style={{ height: "4rem" }}
      >
        <div className="progress w-100 h-75">
          <div
            className={
              progress < 80
                ? "progress-bar fs-5 bg-danger"
                : "progress-bar fs-5 bg-success"
            }
            role="progressbar"
            style={{ width: progress + "%" }}
          >
            {progress}% CO2 Reduction
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
