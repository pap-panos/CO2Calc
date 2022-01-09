import React from "react";
import CO2EmmChart from "../charts/CO2EmmChart";

const CO2Emmisions = ({ totalData, fuelData }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-CO2Emm"
      role="tabpanel"
      aria-labelledby="v-pills-CO2Emm-tab"
    >
      <div className="card border border-light rounded">
        <div className="card-body">
          <CO2EmmChart totalData={totalData} fuelData={fuelData} />
        </div>
      </div>
    </div>
  );
};

export default CO2Emmisions;
