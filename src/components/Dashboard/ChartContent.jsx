import React from "react";
import CO2Emmisions from "./chartConts/CO2Emmisions";
import AirQuality from "./chartConts/AirQuality";

const ChartContent = ({ totalData, fuelData, airData }) => {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <CO2Emmisions totalData={totalData} fuelData={fuelData}></CO2Emmisions>
      <AirQuality airData={airData}></AirQuality>
    </div>
  );
};

export default ChartContent;
