import React from "react";
import { NavLink } from "react-router-dom";

const Flights = ({ toNextTab, toPrevTab }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Flight carbon footprint calculator
        </h5>
        <form>
          <div className="col-md-6 py-2">
            <span>You can enter details for flight itineraries</span>
            <div className="form-check">
              <input className="form-check-input" type="radio" required />
              <label className="form-check-label">Return trip</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                defaultChecked
                required
              />
              <label className="form-check-label">One-way flight</label>
            </div>
          </div>
          <div className="col-md-5 pt-2">
            <label className="form-label">From</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-5 py-1">
            <label className="form-label">To</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-5 pb-2">
            <label className="form-label">Via (optional):</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2 py-2">
            <label className="form-label">Trips</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-md-4 py-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">
                Tick to include radiative forcing
              </label>
            </div>
          </div>
          <div className="col py-2">
            <div className="d-flex justify-content-evenly">
              <button
                onClick={(e) => toPrevTab(e)}
                className="btn btn-outline-primary"
              >
                Previous
              </button>
              <NavLink to="/" role="button" className="btn btn-danger">
                Exit
              </NavLink>
              <button className="btn btn-outline-secondary">Clear</button>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                onClick={(e) => toNextTab(e)}
                className="btn btn-outline-primary"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Flights;
