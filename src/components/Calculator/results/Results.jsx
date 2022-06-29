import React from "react";
import User from "./User";
import City from "./City";
import Country from "./Country";
import World from "./World";
import { Doughnut } from "react-chartjs-2";

const values = [7, 15, 10, 17, 10];

let sum = 0;

for (const value of values) {
  sum = sum + value;
}

let valuesPercentages = [];

for (const [index, value] of values.entries()) {
  valuesPercentages.push((value / sum) * 100);
}

const data = {
  labels: ["Cars", "Flights", "Trains", "Buildings", "Waste Disposal"],
  datasets: [
    {
      data: [values[0], values[1], values[2], values[3], values[4]],
      backgroundColor: ["#0d6efd", "#dc3545", "#198754", "#ffc107", "#0dcaf0"],
      hoverBackgroundColor: [
        "#0d6efd",
        "#dc3545",
        "#198754",
        "#ffc107",
        "#0dcaf0",
      ],
    },
  ],
};

const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};

const carCards = [];
const flightcards = [];
const trainCards = [];
const buildingCards = [];
const wasteCards = [];

carCards.push("Lower than average, good job!");
flightcards.push(
  "Consider replacing all business and first class trips with economy class"
);
flightcards.push("Consider replacing indirect flights with direct flights");
trainCards.push("Lower than average, good job!");
buildingCards.push("Consider replacing old fluorescent lighting with LED's");
buildingCards.push("Consider switching to Energy Efficient appliances");
buildingCards.push("Consider using smart power strips");
buildingCards.push("Consider installing Energy Efficient windows");
wasteCards.push("Lower than average, good job!");

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
        {car > 0 && flight > 0 && train > 0 && building > 0 && waste > 0 && (
          <div className="container pt-4">
            <div className="row">
              <div className="col-sm">
                <Doughnut
                  data={data}
                  //width={10}
                  //height={10}
                  onClick={(item, toggled) =>
                    reactDonutChartHandleClick(item, toggled)
                  }
                  options={{
                    responsive: true,
                    aspectRatio: 1.5,
                  }}
                />
              </div>

              <div className="col-sm">
                {
                  carCards.length !== 0 && (
                    //<div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">Cars</div>
                      <div className="card-footer d-flex  justify-content-between">
                        <ul className="list-group p-2">
                          {" "}
                          {carCards.map((card, index) => (
                            <li key={index}>{card}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                  //</div>
                }
                {flightcards.length !== 0 && (
                  <div className="card bg-danger text-white mb-4">
                    <div className="card-body">Flights</div>
                    <div className="card-footer d-flex justify-content-between">
                      <ul className="list-group p-2">
                        {" "}
                        {flightcards.map((card, index) => (
                          <li key={index}>{card}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {trainCards.length !== 0 && (
                  <div className="card bg-success text-white mb-4">
                    <div className="card-body">Trains</div>
                    <div className="card-footer d-flex justify-content-between">
                      <ul className="list-group p-2">
                        {" "}
                        {trainCards.map((card, index) => (
                          <li key={index}>{card}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {buildingCards.length !== 0 && (
                  <div className="card bg-warning text-white mb-4">
                    <div className="card-body">Buildings</div>
                    <div className="card-footer d-flex justify-content-between">
                      <ul className="list-group p-2">
                        {" "}
                        {buildingCards.map((card, index) => (
                          <li key={index}>{card}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {wasteCards.length !== 0 && (
                  <div className="card bg-info text-white mb-4">
                    <div className="card-body">Waste</div>
                    <div className="card-footer d-flex justify-content-between">
                      <ul className="list-group p-2">
                        {" "}
                        {wasteCards.map((card, index) => (
                          <li key={index}>{card}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
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
