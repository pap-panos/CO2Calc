import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const Buildings = ({ toNextTab, toPrevTab, role }) => {
  const [alert, setAlert] = useState(true);

  const buildingsForm = (e) => {
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
        <h5 className="card-title text-center">CO2 from Buildings</h5>
        {role === "admin" && <h6>Type: Citizen</h6>}
        <form
          className="row g-3"
          onSubmit={(e) => {
            buildingsForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && (
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Initial Value(D)</label>
                <input type="number" className="form-control" value="1912.6" />
              </div>
              <div className="col-md-4">
                <label className="form-label">CO2 Heating(heat pumps)(J)</label>
                <div className="input-group">
                  <input type="number" className="form-control" value="3400" />
                  <span className="input-group-text">
                    * Country_Factor(co2 per KWH)
                  </span>
                </div>
              </div>
            </div>
          )}
          {role === "admin" && <h6>USER INPUT</h6>}
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin" ? "Fuel per year(L)" : "Fuel per year"}
            </label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin" ? "Type of Fuel(K)" : "Type of Fuel"}
            </label>
            <select className="form-select" defaultValue="0">
              <option value="0" disabled hidden>
                Choose...
              </option>
              <option>Diesel</option>
              <option>Petrol</option>
              <option>NG</option>
              <option>Biomass</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin" ? "Grid Type(G)" : "Grid Type"}
            </label>
            <select className="form-select" defaultValue="0">
              <option value="0" disabled hidden>
                Choose...
              </option>
              <option>New Grid</option>
              <option>Old Grid</option>
              <option>Island</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {role === "admin" ? "Solar Thermal(H)" : "Solar Thermal"}
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {role === "admin" ? "Heat Pump(I)" : "Heat Pump"}
              </label>
            </div>
          </div>
          {role === "admin" && (
            <div>
              <h6>
                Calculation Equation(heat pump): D * Country_Factor *
                Country_Factor(co2 per KWH) * G * H * J
              </h6>
              <h6>
                Calculation Equation(fuels): D * Country_Factor *
                Country_Factor(co2 per KWH) * G * H * K * L + (21.25 *
                Country_Factor * Country_Factor(co2 per KWH))
              </h6>
            </div>
          )}
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Trains
              </button>
              <button type="submit" className="btn btn-success">
                Calculate
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Waste Disposal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Buildings;
