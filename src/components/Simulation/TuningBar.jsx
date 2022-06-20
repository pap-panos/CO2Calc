import React from "react";
import Range from "./tuners/Range";
import Radio from "./tuners/Radio";

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
            id={"DomesticTransportBehaviour"}
            name={"Domestic transport behaviour"}
            title={
              "In 2050, individuals travel 9% further than today. No noticeable modal shift."
            }
            handleChart={handleChart}
          ></Range>
          <Range
            id={"ShiftToZeroEmissionTransport"}
            name={"Shift to zero emission transport"}
            title={
              "By 2050, 20% plug in hybrid electric cars; 2.5% zero emission cars."
            }
            handleChart={handleChart}
          ></Range>
          <Range
            id={"ChoiceOfFuelCellsOrBatteries"}
            name={"Choice of fuel cells or batteries"}
            title={"100% of zero emission cars use batteries by 2050"}
            handleChart={handleChart}
          ></Range>
          <Range
            id={"DomesticFreight"}
            name={"Domestic freight"}
            title={
              "Road haulage makes up 73% of distance, using conventional engines. Rail all diesel."
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
          <div className="card border border-light">
            <div className="card-body">
              <p className="form-check-label">CCS power station fuel mix</p>
              <Radio
                id={"CCS1"}
                val={1}
                title={
                  "100% coal/biomass, 0% gas/biogas CCS after demonstration plants."
                }
                name={"A"}
                handleChart={handleChart}
              ></Radio>
              <Radio
                id={"CCS2"}
                val={2}
                title={
                  "66% coal/biomass, 33% gas/biogas CCS after demonstration plants."
                }
                name={"B"}
                handleChart={handleChart}
              ></Radio>
              <Radio
                id={"CCS3"}
                val={3}
                title={
                  "33% coal/biomass, 66% gas/biogas CCS after demonstration plant."
                }
                name={"C"}
                handleChart={handleChart}
              ></Radio>
              <Radio
                id={"CCS4"}
                val={4}
                title={
                  "0% coal/biomas, 100% gas/biogas CCS after demonstration plants."
                }
                name={"D"}
                handleChart={handleChart}
              ></Radio>
            </div>
          </div>
          <Range
            id={"OffshoreWind"}
            name={"Offshore wind"}
            title={
              "~1,400 turbines in 2025, reducing to zero as decommissioned sites are not replanted."
            }
            handleChart={handleChart}
          ></Range>
        </div>
      </div>
    </>
  );
};

export default TuningBar;
