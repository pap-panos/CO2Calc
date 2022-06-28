import React from "react";
import Range from "./tuners/Range";

const TuningBar = ({ handleChart }) => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-demand-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-demand"
            type="button"
            role="tab"
            aria-controls="nav-demand"
            aria-selected="true"
          >
            Citizen
          </button>
          <button
            className="nav-link"
            id="nav-supply-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-supply"
            type="button"
            role="tab"
            aria-controls="nav-supply"
            aria-selected="false"
          >
            Government
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-demand"
          role="tabpanel"
          aria-labelledby="nav-demand-tab"
        >
          <Range
            id={"ImproveTransportationHabits"}
            name={"Improve Transportation Habits"}
            tooltip1={"Total CO2 emissions (25,8%)"}
            tooltip2={"Carpolling (20,12% CO2)"}
            tooltip3={
              "Carpooling + Replace business and first class with economy (15,74% CO2)"
            }
            tooltip4={
              "Carpooling + Replace business and first class with economy + Replace indirect flights with direct flights (13,16% CO2)"
            }
            handleChart={handleChart}
          ></Range>
          <Range
            id={"LivingHabits"}
            name={"Living Habits"}
            tooltip1={"Total CO2 emissions (25,8%)"}
            tooltip2={
              "Replace old fluorescent lighting with LED's (25,08% CO2)"
            }
            tooltip3={
              "Replace old fluorescent lighting with LED's + Energy Efficient appliances (23,81% CO2)"
            }
            tooltip4={
              "Insulation Thickness + Replace old fluorescent lighting with LED's + Energy Efficient appliances (20,72% CO2)"
            }
            handleChart={handleChart}
          ></Range>
          <Range
            id={"ImproveRecyclingHabits"}
            name={"Improve Recycling Habits"}
            tooltip1={"Total CO2 emissions (3,1%)"}
            tooltip2={
              "20% Increased recycling of plastics + paper + metal cans + glass (2,84% CO2)"
            }
            tooltip3={
              "40% Increased recycling of plastics + paper + metal cans + glass (2,57% CO2)"
            }
            tooltip4={
              "70% Increased recycling of plastics + paper + metal cans + glass (2,17% CO2)"
            }
            handleChart={handleChart}
          ></Range>
        </div>
        <div
          className="tab-pane fade"
          id="nav-supply"
          role="tabpanel"
          aria-labelledby="nav-supply-tab"
        >
          <Range
            id={"FossilFuelCombustion"}
            name={"Capture and storage of CO2 from fossil fuel combustion"}
            tooltip1={"Total CO2 emissions (25,8%)"}
            tooltip2={"40% Capture and storage of CO2"}
            tooltip3={"60% Capture and storage of CO2"}
            tooltip4={"100% Capture and storage of CO2"}
            handleChart={handleChart}
          ></Range>
          <Range
            id={"PhotovoltaicParks"}
            name={"Photovoltaic parks at petrol stations"}
            tooltip1={"Total CO2 emissions (25,8%)"}
            tooltip2={"Installed photovoltaic parks at 30% petrol stations"}
            tooltip3={"Installed photovoltaic parks at 60% petrol stations"}
            tooltip4={"Installed photovoltaic parks at 100% petrol stations"}
            handleChart={handleChart}
          ></Range>
          <Range
            id={"WindEnergy"}
            name={"Wind Energy"}
            tooltip1={"Total CO2 emissions (25,8%)"}
            tooltip2={"30% Penetration from wind energy"}
            tooltip3={"60% Penetration from wind energy"}
            tooltip4={"90% Penetration from wind energy"}
            handleChart={handleChart}
          ></Range>
        </div>
      </div>
    </>
  );
};

export default TuningBar;
