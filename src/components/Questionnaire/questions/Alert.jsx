import React from "react";

const Alert = ({ alert, hideAlert }) => {
  return (
    <div className="col-12 py-1">
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
        hidden={alert}
      >
        <strong>Calculated successfully!</strong> You can check the Results tab
        to see the applied changes.
        <button
          type="button"
          className="btn-close"
          onClick={(e) => {
            hideAlert(e);
          }}
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Alert;
