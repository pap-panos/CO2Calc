import React from "react";
import { useState } from "react";
import Alert from "../Alert";
import HouseDomain from "../../Administrative/Modals/HouseDomain";

const House = ({ toNextTab, toPrevTab, role }) => {
  const [alert, setAlert] = useState(true);
  const [action, setAction] = useState("");

  const houseForm = (e) => {
    e.preventDefault();
    setAlert(false);
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
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
            <div className="row py-2">
              <div className="col-md-6">
                <div className="input-group py-1">
                  <span className="input-group-text">Electricity:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">kWh</option>
                  </select>
                </div>
                {/* <div className="input-group py-1">
                  <span className="input-group-text">Natural gas:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">therms</option>
                    <option value="2">kWh</option>
                  </select>
                </div>
                <div className="input-group py-1">
                  <span className="input-group-text">Heating oil:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">litres</option>
                    <option value="2">tonnes</option>
                    <option value="3">kWh</option>
                  </select>
                </div>
                <div className="input-group py-1">
                  <span className="input-group-text">Coal:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">tonnes</option>
                    <option value="2">kWh</option>
                    <option value="3">x10Kg Bags</option>
                    <option value="4">x20Kg Bags</option>
                    <option value="5">x25Kg Bags</option>
                    <option value="6">x50Kg Bags</option>
                  </select>
                </div>
                <div className="input-group py-1">
                  <span className="input-group-text">LPG:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">litres</option>
                    <option value="2">kWh</option>
                    <option value="3">therms</option>
                  </select>
                </div>
                <div className="input-group py-1">
                  <span className="input-group-text">Propane:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">litres</option>
                  </select>
                </div>
                <div className="input-group py-1">
                  <span className="input-group-text">Wood:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">tonnes</option>
                  </select>
                </div> */}
              </div>
              {role === "admin" && (
                <>
                  <div className="col-md-2">
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
                  <div className="col-md-auto py-1">
                    <button
                      type="button"
                      onClick={() => setAction("Edit")}
                      className="btn btn-outline-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#HouseDomainModal"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setAction("Delete")}
                      className="btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#HouseDomainModal"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="row py-2">
              <div className="col-md-6">
                <div className="input-group py-1">
                  <span className="input-group-text">Heating oil:</span>
                  <input type="number" className="form-control" required />
                  <select className="form-select" defaultValue="1" required>
                    <option value="1">litres</option>
                    <option value="2">tonnes</option>
                    <option value="3">kWh</option>
                  </select>
                </div>
              </div>
              {role === "admin" && (
                <>
                  <div className="col-md-2">
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
                  <div className="col-md-auto py-1">
                    <button
                      type="button"
                      onClick={() => setAction("Edit")}
                      className="btn btn-outline-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#HouseDomainModal"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setAction("Delete")}
                      className="btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#HouseDomainModal"
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
                  onClick={() => setAction("Add")}
                  className="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#HouseDomainModal"
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
      <HouseDomain action={action}></HouseDomain>
    </>
  );
};

export default House;