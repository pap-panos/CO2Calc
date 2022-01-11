import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="row justify-content-md-center" style={{ height: "5rem" }}>
      <div
        className="col-lg-2 d-flex align-items-center justify-content-center"
        style={{ height: "4rem" }}
      >
        <span className="bg-white p-3 rounded" style={{ color: "#dc3545" }}>
          CO2 Reduction
        </span>
      </div>
      <div
        className="col-md-8 d-flex align-items-center justify-content-center bg-white rounded"
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
            {progress}%
          </div>
        </div>
      </div>
      <div
        className="col-lg-2 d-flex align-items-center justify-content-center mb-5 mb-lg-0 pb-5 pb-lg-0 pt-4 pt-lg-0"
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
