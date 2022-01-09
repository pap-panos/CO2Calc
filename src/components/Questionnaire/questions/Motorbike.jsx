import React from "react";
import { NavLink } from "react-router-dom";

const Motorbike = ({ toNextTab, toPrevTab }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Motorbike carbon footprint calculator
        </h5>
        <form>
          <div className="col py-2">
            <span>You can enter details for motorbikes</span>
          </div>
          <div className="col-md-4 py-2">
            <label className="form-label">Mileage:</label>
            <div className="input-group">
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">Kilometers</option>
                <option value="2">Miles</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 py-2">
            <label className="form-label">Choose vehicle:</label>
            <select className="form-select" defaultValue="0" required>
              <option disabled value="0">
                Motorbikes Database
              </option>
              <option value="1">Yamaha</option>
              <option value="2">Honda</option>
            </select>
          </div>
          <div className="col-md-6 py-2">
            <label className="form-label">Or enter efficiency:</label>
            <div className="input-group">
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">L/100km</option>
                <option value="2">g/km</option>
                <option value="3">mpg(UK)</option>
                <option value="4">mpg(US)</option>
              </select>
              <select className="form-select" defaultValue="1" required>
                <option value="1">Petrol</option>
                <option value="2">Diesel</option>
                <option value="3">LPG</option>
                <option value="4">CNG</option>
              </select>
            </div>
          </div>
          <div className="col py-2">
            <div className="d-flex justify-content-evenly">
              <button
                onClick={(e) => toPrevTab(e)}
                className="btn btn-outline-primary"
              >
                Previous
              </button>
              <NavLink to="/" role="button" className="btn btn-danger">
                Exit
              </NavLink>
              <button className="btn btn-outline-secondary">Clear</button>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                onClick={(e) => toNextTab(e)}
                className="btn btn-outline-primary"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Motorbike;
