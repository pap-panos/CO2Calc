import React from "react";
import CO2Emmisions from "./chartConts/CO2Emmisions";

const ChartContent = ({ totalData, totalColor }) => {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <CO2Emmisions
        totalData={totalData}
        totalColor={totalColor}
      ></CO2Emmisions>
    </div>
  );
};

export default ChartContent;
