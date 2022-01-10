import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div
      className="row justify-content-md-center mb-5"
      style={{ height: "5rem" }}
    >
      <div
        className="col-md-10 d-flex align-items-center justify-content-center bg-white rounded"
        style={{ height: "4rem" }}
      >
        <div className="progress w-100 h-75">
          <div
            className={
              progress < 80
                ? "progress-bar bg-danger text-wrap"
                : "progress-bar bg-success text-wrap"
            }
            role="progressbar"
            style={{ width: progress + "%" }}
          >
            {progress}% CO2 Reduction
          </div>
        </div>
      </div>
      <div
        className="col-lg-2 d-flex align-items-center justify-content-center"
        style={{ height: "4rem" }}
      >
        <button
          disabled={progress < 79}
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
