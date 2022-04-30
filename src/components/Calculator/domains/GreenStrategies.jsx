import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const GreenStrategies = ({ toNextTab, toPrevTab, role }) => {
  const [alert, setAlert] = useState(true);

  const strategiesForm = (e) => {
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
        <h5 className="card-title text-center">CO2 from Green Strategies</h5>
        {role === "admin" && <h6>Type: Citizen</h6>}
        <form
          className="row g-3"
          onSubmit={(e) => {
            strategiesForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && <h6>USER INPUT</h6>}
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin"
                ? "Reduction of waste generation(D)"
                : "Reduction of waste generation"}
            </label>
            <div className="input-group">
              <input type="number" className="form-control" />
              <span className="input-group-text">%</span>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin"
                ? "Increased recycling of plastics(E)"
                : "Increased recycling of plastics"}
            </label>
            <div className="input-group">
              <input type="number" className="form-control" />
              <span className="input-group-text">%</span>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin"
                ? "Increased recycling of paper(F)"
                : "Increased recycling of paper"}
            </label>
            <div className="input-group">
              <input type="number" className="form-control" />
              <span className="input-group-text">%</span>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin"
                ? "Increased recycling of glass(G)"
                : "Increased recycling of glass"}
            </label>
            <div className="input-group">
              <input type="number" className="form-control" />
              <span className="input-group-text">%</span>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">
              {role === "admin"
                ? "Increased recycling of metal cans(H)"
                : "Increased recycling of metal cans"}
            </label>
            <div className="input-group">
              <input type="number" className="form-control" />
              <span className="input-group-text">%</span>
            </div>
          </div>
          {role === "admin" && (
            <div className="row mt-3">
              <div className="col-12">
                <h6>CALCULATIONS</h6>
                <ul>
                  <li>CO2 savings % reduction(I): D8*L6</li>
                  <li>
                    CO2 savings % increased recycling of plastics(J): (1+E8) *
                    (J6*0,2) * 0,4))
                  </li>
                  <li>
                    CO2 savings % increased recycling of paper(K): (1+F8) *
                    (J6*0,17) * 0,96)
                  </li>
                  <li>
                    CO2 savings % increased recycling of glass(L): (1+G8) *
                    (J6*0,03) * 0,08
                  </li>
                  <li>
                    CO2 savings % increased recycling of metal cans(M): (1+H8) *
                    (J6*0,08) * 1,43
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Waste Disposal
              </button>
              <button type="submit" className="btn btn-success">
                Calculate
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Results
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GreenStrategies;
