import React from "react";
import { useState } from "react";
import Alert from "./Alert";

const Car = ({ toNextTab, toPrevTab, handleCarRes, start, end, role }) => {
  const [alert, setAlert] = useState(true);
  const [distance, setDistance] = useState(0);
  const [age, setAge] = useState("2");
  const [efficiency, setEfficiency] = useState(3.5);

  const carForm = (e) => {
    e.preventDefault();
    handleCarRes(distance, age, efficiency);
    setAlert(false);
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
  };

  const handleDistance = (e) => {
    if (e < 0) {
      setDistance(0);
    } else if (e > 50000) {
      setDistance(50000);
    } else {
      setDistance(e);
    }
  };

  const handleEfficiency = (e) => {
    if (e < 3.5) {
      setEfficiency(3.5);
    } else if (e > 10) {
      setEfficiency(10);
    } else {
      setEfficiency(e);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Car carbon footprint calculator
        </h5>
        <form
          className="row justify-content-md-center"
          onSubmit={(e) => {
            carForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          <div className="col-12 py-2">
            <span>You can enter details for cars:</span>
          </div>
          <div className="col-md-6 py-2">
            <label className="form-label">Can be set from Welcome Tab.</label>
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
          <div className="col-md-4 py-2">
            <label className="form-label">Distance travelled:</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={distance}
                onChange={(e) => {
                  handleDistance(e.target.value);
                }}
                required
              />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
            {role === "admin" && <span>This is calculated as a*x + b</span>}
          </div>
          <div className="col-md-4 py-2">
            <label className="form-label">Car Age:</label>
            <select
              className="form-select"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            >
              <option value="1">1998 or older...</option>
              <option value="2">1999 - 2009</option>
              <option value="3">2009 - 2019</option>
              <option value="4">2020 or newer...</option>
            </select>
          </div>
          <div className="col-md-6 py-2">
            <label className="form-label">Enter efficiency:</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={efficiency}
                onChange={(e) => {
                  handleEfficiency(e.target.value);
                }}
                required
              />
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
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Flights
              </button>
              <button type="submit" className="btn btn-success mx-1">
                Calculate & Add To Footprint
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Motorbike
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Car;
