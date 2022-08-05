import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const Flights = ({ toNextTab, toPrevTab, start, end, role, handleFlight }) => {
  const [alert, setAlert] = useState(true);

  const flightsForm = (e) => {
    e.preventDefault();
    setAlert(false);
    handleFlight();
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">CO2 from Flights</h5>
        {role === "admin" && <h6>Type: Citizen</h6>}
        <form
          className="row g-3"
          onSubmit={(e) => {
            flightsForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && (
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">CO2 per kg (kerosene)(F)</label>
                <input
                  type="number"
                  className="form-control"
                  value="3.16"
                  onChange={() => {
                    console.log("Test");
                  }}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">
                  Liters per kg of kerosene(G)
                </label>
                <input
                  type="number"
                  className="form-control"
                  value="1.25"
                  onChange={() => {
                    console.log("Test");
                  }}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Liters per km travelled(H)</label>
                <input
                  type="number"
                  className="form-control"
                  value="17"
                  onChange={() => {
                    console.log("Test");
                  }}
                />
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
              onChange={() => {
                console.log("Test");
              }}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">To</label>
            <input
              type="text"
              className="form-control bg-white"
              value={end}
              onChange={() => {
                console.log("Test");
              }}
              disabled
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              disabled
              value="Domestic"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin" ? "Number of Flights(D)" : "Number of Flights"}
            </label>
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin"
                ? "Average distance of flight(E)"
                : "Average distance of flight"}
            </label>
            <input
              type="number"
              className="form-control"
              value="500"
              disabled
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              disabled
              value="Short Haul (<3 Hours)"
            />
          </div>
          <div className="col-md-4">
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              value="1100"
              disabled
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              disabled
              value="Medium Haul (3-6 Hours)"
            />
          </div>
          <div className="col-md-4">
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              value="3000"
              disabled
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              disabled
              value="Long Haul (6-12 Hours)"
            />
          </div>
          <div className="col-md-4">
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              value="6000"
              disabled
            />
          </div>
          {role === "admin" && <h6>CALCULATION: D*E*F*G*H</h6>}
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Cars
              </button>
              <button type="submit" className="btn btn-success">
                Calculate
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Trains
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Flights;
