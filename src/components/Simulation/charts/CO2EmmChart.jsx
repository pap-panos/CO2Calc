import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const CO2Emmissions = ({ totalData, fuelData }) => {
  const data = {
    labels: ["2022", "2030", "2040", "2050"],
    datasets: [
      {
        label: "Total",
        fill: false,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        data: totalData,
      },
      {
        label: "Target",
        fill: false,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderDash: [5, 5],
        data: [175, 175, 175, 175],
      },
      {
        label: "Fuel Combustion",
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        data: fuelData,
        fill: true,
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
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Greenhouse Gas Emissions (MtCO2e/yr)",
        },
        min: 0,
        max: 1000,
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
