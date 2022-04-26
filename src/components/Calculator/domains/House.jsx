import React from "react";
import { useState } from "react";
import Alert from "../Alert";
import HouseDomain from "../../Administrative/Modals/HouseDomain";

const House = ({ toNextTab, toPrevTab, role, start, end }) => {
  const [alert, setAlert] = useState(true);
  const [action, setAction] = useState("");
  const [domain, setDomain] = useState("");

  const houseForm = (e) => {
    e.preventDefault();
    setAlert(false);
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
  };

  const handleButton = (e) => {
    setAction(e);
    setDomain("x");
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">
            Household carbon footprint calculator
          </h5>
          <form
            onSubmit={(e) => {
              houseForm(e);
            }}
          >
            <Alert alert={alert} hideAlert={hideAlert}></Alert>
            <div className="col-12 py-1">
              <span>
                Enter your consumption of each type of energy, and press the
                Calculate button Your individual footprint is calculated by
                dividing the amount of total energy used in the house by the
                number of people in your household. How many people are in your
                household?
              </span>
            </div>
            <div className="col-md-10">
              <label className="form-label">
                Note : If you are calculating your full household footprint e.g.
                for your family, keep this as "1".
              </label>
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                defaultValue="1"
                required
              />
            </div>
            <div className="row py-1">
              <div className="col-md-6 py-1">
                <label className="form-label">
                  Date can be set from Welcome Tab.
                </label>
                <div className="input-group">
                  <span className="input-group-text">From</span>
                  <input
                    type="text"
                    className="form-control bg-white"
                    value={start}
                    disabled
                  />
                  <span className="input-group-text">To</span>
                  <input
                    type="text"
                    className="form-control bg-white"
                    value={end}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div
              className={
                role === "admin"
                  ? "row py-1"
                  : "row justify-content-md-center py-1"
              }
            >
              <div className="col-md-6">
                <div className="input-group py-1">
                  <span className="input-group-text">Electricity:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">kWh</option>
                  </select>
                </div>
              </div>
              {role === "admin" && (
                <>
                  <div className="col-xl-2 col-md-4 col-6">
                    <div className="input-group py-1">
                      <span className="input-group-text">Weight:</span>
                      <input
                        type="number"
                        className="form-control"
                        value="0.018"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-xl-auto col-auto py-1">
                    <button
                      type="button"
                      onClick={(e) => handleButton(e.target.value)}
                      className="btn btn-outline-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#HouseDomainModal"
                      value="Edit"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleButton(e.target.value)}
                      className="btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#HouseDomainModal"
                      value="Delete"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
            {role === "admin" && (
              <div className="d-flex justify-content-center p-2">
                <button
                  type="button"
                  onClick={(e) => handleButton(e.target.value)}
                  className="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#HouseDomainModal"
                  value="Add"
                >
                  Add Domain
                </button>
              </div>
            )}
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between">
                <button
                  onClick={(e) => toPrevTab(e)}
                  className="btn btn-primary"
                >
                  Demographic
                </button>
                <button type="submit" className="btn btn-success mx-1">
                  Calculate & Add To Footprint
                </button>
                <button
                  onClick={(e) => toNextTab(e)}
                  className="btn btn-primary"
                >
                  Flights
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <HouseDomain action={action} domain={domain}></HouseDomain>
    </>
  );
};

export default House;
