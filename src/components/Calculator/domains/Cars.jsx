import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const Cars = ({ toNextTab, toPrevTab, role, handleCar }) => {
  const [alert, setAlert] = useState(true);

  const carsForm = (e) => {
    e.preventDefault();
    setAlert(false);
    handleCar();
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">CO2 from Cars</h5>
        {role === "admin" && <h6>Type: Citizen</h6>}
        <form
          className="row g-3"
          onSubmit={(e) => {
            carsForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && (
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Initial Value(D)</label>
                <input
                  type="number"
                  className="form-control"
                  value="12410"
                  onChange={() => {
                    console.log("Test");
                  }}
                />
              </div>
            </div>
          )}
          {role === "admin" && <h6>USER INPUT</h6>}
          <div className="col-md-4">
            <label className="form-label">Distance Travelled (km/year)</label>
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin" ? "Litres/100 KM(F)" : "Litres/100 KM"}
            </label>
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin" ? "Type of Fuel(G)" : "Type of Fuel"}
            </label>
            <select
              className="form-select"
              defaultValue="0"
              onChange={() => {
                console.log("Test");
              }}
              required
            >
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
              <label className="form-check-label">
                {role === "admin"
                  ? "Public Transportation(H)"
                  : "Public Transportation"}
              </label>
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
              <label className="form-check-label">
                {role === "admin" ? "Electric Car(I)" : "Electric Car"}
              </label>
            </div>
          </div>
          {role === "admin" && (
            <div>
              <h6>CALCULATION: ((D * Country_Factor)/100) * F * G * H</h6>
              <h6>
                CALCULATION FOR E-CAR: D * Country_Factor * 0.156 *
                Country_Factor(KWH)
              </h6>
            </div>
          )}
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
