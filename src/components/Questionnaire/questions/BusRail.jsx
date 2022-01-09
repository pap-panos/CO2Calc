import React from "react";
import { NavLink } from "react-router-dom";

const BusRail = ({ toPrevTab, toNextTab }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Public transport carbon footprint calculator
        </h5>
        <form>
          <div className="col py-2">
            <span>Enter mileage for each type of public transport</span>
          </div>
          <div className="col-md-6 py-2">
            <div className="input-group py-1">
              <span className="input-group-text">Bus:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            <div className="input-group py-1">
              <span className="input-group-text">Coach:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            <div className="input-group py-1">
              <span className="input-group-text">National rail:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            <div className="input-group py-1">
              <span className="input-group-text">International rail:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            <div className="input-group py-1">
              <span className="input-group-text">Tram:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            <div className="input-group py-1">
              <span className="input-group-text">Tube / Subway:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            <div className="input-group py-1">
              <span className="input-group-text">Tax:</span>
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
          </div>
          <div className="col py-2">
            <div className="d-flex justify-content-evenly">
              <button
                onClick={(e) => toPrevTab(e)}
                className="btn btn-outline-primary"
              >
                Motorbike
              </button>
              <NavLink to="/" role="button" className="btn btn-danger">
                Exit
              </NavLink>
              <button className="btn btn-outline-secondary">Clear</button>
              <button className="btn btn-primary">Submit</button>
              <button
                onClick={(e) => toNextTab(e)}
                className="btn btn-outline-primary"
              >
                Results
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusRail;
