import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const Cars = ({ toNextTab, toPrevTab, role }) => {
  const [alert, setAlert] = useState(true);

  const carsForm = (e) => {
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
        <h5 className="card-title text-center">CO2 from Cars</h5>
        <h6>Type: Citizen</h6>
        <form
          className="row g-3"
          onSubmit={(e) => {
            carsForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && (
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Initial Value</label>
                <input type="number" className="form-control" value="12410" />
              </div>
            </div>
          )}
          <div className="col-md-6">
            <label className="form-label">Litres/100 KM</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Type of Fuel</label>
            <select className="form-select" defaultValue="0">
              <option value="0" disabled hidden>
                Choose...
              </option>
              <option>Diesel</option>
              <option>Petrol</option>
              <option>LPG</option>
              <option>CNG</option>
              <option>Petrol + E10</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                data-bs-toggle="tooltip"
                title="Do you use public transportation? Check for yes or leave blank for no."
              />
              <label className="form-check-label">Public Transportation</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                data-bs-toggle="tooltip"
                title="Do you own an electric car? Check for yes or leave blank for no."
              />
              <label className="form-check-label">Electric Car</label>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Demographic
              </button>
              <button type="submit" className="btn btn-success">
                Calculate
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Flights
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cars;
