import React from "react";

const HouseDomain = ({ action, domain }) => {
  return (
    <div
      className="modal fade"
      id="HouseDomainModal"
      tabIndex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="HouseDomainModalLabel"
      aria-hidden="true"
    >
      <div
        className={
          action === "Delete"
            ? "modal-dialog modal-dialog-centered"
            : "modal-dialog"
        }
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="HouseDomainModalLabel">
              {action === "" ? "House Domain" : action + " House Domain"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {action === "Delete" ? (
              <span>
                {"Are you sure you want to delete house domain " + domain + "?"}
              </span>
            ) : (
              <form>
                <div className="mb-2">
                  <label className="col-form-label fw-bold">Domain Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                  <label className="col-form-label fw-bold">
                    Domain Weight:
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <hr />
                <span className="fw-bold">Measurement Unit #1:</span>
                <div className="mb-1">
                  <label className="col-form-label">Name:</label>
                  <input type="text" className="form-control" />
                  <label className="col-form-label">Weight:</label>
                  <input type="number" className="form-control" />
                </div>
                <hr />
                <span className="fw-bold">Measurement Unit #2:</span>
                <div className="mb-1">
                  <label className="col-form-label">Name:</label>
                  <input type="text" className="form-control" />
                  <label className="col-form-label">Weight:</label>
                  <input type="number" className="form-control" />
                </div>
                <hr />
                <span className="fw-bold">Measurement Unit #3:</span>
                <div className="mb-1">
                  <label className="col-form-label">Name:</label>
                  <input type="text" className="form-control" />
                  <label className="col-form-label">Weight:</label>
                  <input type="number" className="form-control" />
                </div>
              </form>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {action === "Delete" ? (
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            ) : (
              <button type="button" className="btn btn-primary">
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDomain;
