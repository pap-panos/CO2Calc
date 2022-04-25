import React from "react";
import User from "./User";
import City from "./City";
import Country from "./Country";
import World from "./World";

const Results = ({
  toPrevTab,
  cityRes,
  countryRes,
  car,
  motorbike,
  country,
  city,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          CO2 Footprint Calculator Results
        </h5>
        <div className="row py-2">
          <div className="col-md-6 p-2">
            <User car={car} motorbike={motorbike}></User>
          </div>
          <div className="col-md-6 p-2">
            <City cityRes={cityRes} city={city}></City>
          </div>
          <div className="col-md-6 p-2">
            <Country countryRes={countryRes} country={country}></Country>
          </div>
          <div className="col-md-6 p-2">
            <World></World>
          </div>
        </div>
        <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
          Bus & Rail
        </button>
      </div>
    </div>
  );
};

export default Results;
