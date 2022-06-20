import React from "react";
import User from "./User";
import City from "./City";
import Country from "./Country";
import World from "./World";

const Results = ({
  toPrevTab,
  cityRes,
  countryRes,
  country,
  city,
  car,
  flight,
  train,
  building,
  waste,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">CO2 Calculator Results</h5>
        <div className="row justify-content-center py-2">
          <div className="col-lg-7 py-2">
            <User
              car={car}
              flight={flight}
              train={train}
              building={building}
              waste={waste}
            ></User>
          </div>
        </div>
        <div className="row justify-content-center py-2">
          <div className="col-lg-7 py-2">
            <Country countryRes={countryRes} country={country}></Country>
          </div>
        </div>
        <div hidden>
          <City hidden cityRes={cityRes} city={city}></City>
        </div>
        <div hidden>
          <World></World>
        </div>
        <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
          Waste Disposal
        </button>
      </div>
    </div>
  );
};

export default Results;
