import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const AirQuality = ({ airData }) => {
  const data = {
    labels: [
      "2022",
      "2050 - Doesn't tackleclimate change(All atlevel 1)",
      "2050 - Your pathway",
    ],
    datasets: [
      {
        label: "Total",
        fill: true,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        data: airData,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: "Air pollution impact index",
        },
        min: 0,
        max: 100,
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default AirQuality;
