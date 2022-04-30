import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const Trains = ({ toNextTab, toPrevTab, start, end, role }) => {
  const [alert, setAlert] = useState(true);

  const trainsForm = (e) => {
    e.preventDefault();
    setAlert(false);
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">CO2 from Trains</h5>
        {role === "admin" && <h6>Type: Citizen</h6>}
        <form
          className="row g-3"
          onSubmit={(e) => {
            trainsForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && (
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">kWh per km of travel(G)</label>
                <input type="number" className="form-control" value="0.75" />
              </div>
            </div>
          )}
          {role === "admin" && <h6>USER INPUT</h6>}
          <div className="col-md-6">
            <label className="form-label">From</label>
            <input
              type="text"
              className="form-control bg-white"
              value={start}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">To</label>
            <input
              type="text"
              className="form-control bg-white"
              value={end}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              {role === "admin" ? "Number of trips(D)" : "Number of trips"}
            </label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              {role === "admin"
                ? "Average distance of trip(E)"
                : "Average distance of trip"}
            </label>
            <input type="number" className="form-control" />
          </div>
          {role === "admin" && (
            <h6>CALCULATION: D * E * Country_Factor(KWH) * G</h6>
          )}
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Flights
              </button>
              <button type="submit" className="btn btn-success">
                Calculate
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Buildings
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Trains;
