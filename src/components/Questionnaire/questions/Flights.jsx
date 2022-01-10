import React from "react";

const Flights = ({ toNextTab, toPrevTab }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Flight carbon footprint calculator
        </h5>
        <form className="row justify-content-md-center">
          <div className="col-md-12 py-2">
            <span>
              You can enter details for flight itineraries. Please tell us what
              type of flights do you most commonly book?
            </span>
            <div className="form-check">
              <input className="form-check-input" type="radio" required />
              <label className="form-check-label">Return trip</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                defaultChecked
                required
              />
              <label className="form-check-label">One-way flight</label>
            </div>
          </div>
          <div className="col-md-5 py-2">
            <label className="form-label">
              Average Flight Distance Travelled:
            </label>
            <div className="input-group">
              <input type="number" className="form-control" required />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 py-2">
            <label className="form-label">Number of Trips:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-md-12 py-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">
                Tick to include radiative forcing
              </label>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between">
              <button
                onClick={(e) => toPrevTab(e)}
                className="btn btn-primary"
              >
                House
              </button>
              <button type="submit" className="btn btn-success mx-1">
                Calculate & Add To Footprint
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Car
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Flights;
