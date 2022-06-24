import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const CO2Emmissions = ({ totalData, totalColor }) => {
  const data = {
    labels: ["2022", "2030", "2040", "2050"],
    datasets: [
      {
        label: "Total",
        fill: true,
        backgroundColor: [totalColor[0]],
        borderColor: [totalColor[1]],
        data: totalData,
      },
      {
        label: "Target",
        fill: false,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderDash: [5, 5],
        data: [3.5, 3.5, 3.5, 3.5],
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Greenhouse Gas Emissions (tons per person)",
        },
        min: 0,
        max: 10,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default CO2Emmissions;
