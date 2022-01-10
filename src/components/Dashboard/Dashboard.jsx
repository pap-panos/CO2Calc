import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Sidebar from "./Sidebar";
import ChartContent from "./ChartContent";
import TuningBar from "./TuningBar";

const Dashboard = () => {
  const [totalData, setTotalData] = useState([515, 510, 535, 575]);
  const [fuelData, setFuelData] = useState([505, 500, 525, 565]);
  const [airData, setAirData] = useState([100, 60, 60]);
  const [progress, setProgress] = useState(5);
  const [prev, setPrev] = useState(1);

  const handleChart = (c) => {
    let tempTotalData = [...totalData];
    let tempFuelData = [...fuelData];
    let tempAirData = [...airData];
    let bar = progress;
    switch (c) {
      case "1":
        for (let i = 0; i < tempTotalData.length; i++) {
          tempTotalData[i] += 50;
          tempFuelData[i] += 50;
        }
        for (let i = 0; i < tempAirData.length; i++) {
          tempAirData[i] += 5;
        }
        bar -= 10;
        setPrev(1);
        break;
      case "2":
        if (prev === 3) {
          for (let i = 0; i < tempTotalData.length; i++) {
            tempTotalData[i] += 50;
            tempFuelData[i] += 50;
          }
          for (let i = 0; i < tempAirData.length; i++) {
            tempAirData[i] += 5;
          }
          bar -= 10;
        } else {
          for (let i = 0; i < tempTotalData.length; i++) {
            tempTotalData[i] -= 50;
            tempFuelData[i] -= 50;
          }
          for (let i = 0; i < tempAirData.length; i++) {
            tempAirData[i] -= 5;
          }
          bar += 10;
        }
        setPrev(2);
        break;
      case "3":
        if (prev === 4) {
          for (let i = 0; i < tempTotalData.length; i++) {
            tempTotalData[i] += 50;
            tempFuelData[i] += 50;
          }
          for (let i = 0; i < tempAirData.length; i++) {
            tempAirData[i] += 5;
          }
          bar -= 10;
        } else {
          for (let i = 0; i < tempTotalData.length; i++) {
            tempTotalData[i] -= 50;
            tempFuelData[i] -= 50;
          }
          for (let i = 0; i < tempAirData.length; i++) {
            tempAirData[i] -= 5;
          }
          bar += 10;
        }
        setPrev(3);
        break;
      case "4":
        for (let i = 0; i < tempTotalData.length; i++) {
          tempTotalData[i] -= 50;
          tempFuelData[i] -= 50;
        }
        for (let i = 0; i < tempAirData.length; i++) {
          tempAirData[i] -= 5;
        }
        bar += 10;
        setPrev(4);
        break;
      default:
        break;
    }
    if (tempTotalData[3] < 125) {
      setTotalData([65, 60, 85, 125]);
      setFuelData([55, 50, 75, 115]);
    } else {
      setTotalData(tempTotalData);
      setFuelData(tempFuelData);
    }
    if (tempAirData[2] < 10) {
      setAirData([50, 10, 10]);
    } else {
      setAirData(tempAirData);
    }
    if (bar > 100) {
      setProgress(100);
    } else if (bar < 0) {
      setProgress(0);
    } else {
      setProgress(bar);
    }
  };

  return (
    <div className="container-fluid py-3">
      <ProgressBar progress={progress}></ProgressBar>
      <div className="row justify-content-md-center">
        <div className="col-md-auto p-0 rounded">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 px-1 pb-1 rounded">
          <ChartContent
            totalData={totalData}
            fuelData={fuelData}
            airData={airData}
          ></ChartContent>
        </div>
        <div className="col-lg-2 p-0 rounded">
          <TuningBar handleChart={handleChart}></TuningBar>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
