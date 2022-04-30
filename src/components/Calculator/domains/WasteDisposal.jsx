import React from "react";
import { useState } from "react";
import Alert from "../Alert";

const WasteDisposal = ({ toNextTab, toPrevTab, role }) => {
  const [alert, setAlert] = useState(true);

  const wasteForm = (e) => {
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
        <h5 className="card-title text-center">CO2 from Waste Disposal</h5>
        {role === "admin" && <h6>Type: Citizen</h6>}
        <form
          className="row g-3"
          onSubmit={(e) => {
            wasteForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          {role === "admin" && (
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Initial Value(D)</label>
                <input type="number" className="form-control" value="608" />
              </div>
              <div className="col-md-8">
                <ul>
                  <li>Country Factor(E)</li>
                  <li>Country Recycling Factor(F)</li>
                  <li>Country Energy Recovery Factor(G)</li>
                  <li>CO2 per kWh(country factor)(H)</li>
                </ul>
              </div>
            </div>
          )}
          {role === "admin" && <h6>USER INPUT</h6>}

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {role === "admin"
                  ? "CO2 from landfilling(I)"
                  : "CO2 from landfilling"}
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {role === "admin"
                  ? "CO2 from waste recycling(J)"
                  : "CO2 from waste recycling"}
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {role === "admin"
                  ? "CO2 from composting(K)"
                  : "CO2 from composting"}
              </label>
            </div>
          </div>
          {role === "admin" && (
            <div className="row mt-3">
              <div className="col-12">
                <h6>CALCULATIONS</h6>
                <ul>
                  <li>
                    CO2 from landfilling(I): (D*E*(F*1250*0,8)) +
                    (D*E*(F*300*0,2))
                  </li>
                  <li>CO2 from waste recycling(J): D*E*F*0,75*30*H</li>
                  <li>CO2 from composting(K): D*E*0,25*120</li>
                  <li>CO2 from energy recovery(L): D*E*G*1050</li>
                  <li>CO2 from waste management: I+J+K+L</li>
                </ul>
              </div>
            </div>
          )}
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Buildings
              </button>
              <button type="submit" className="btn btn-success">
                Calculate
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Green Strategies
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WasteDisposal;
