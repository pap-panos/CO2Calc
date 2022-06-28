import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Sidebar from "./Sidebar";
import ChartContent from "./ChartContent";
import TuningBar from "./TuningBar";
import ModalAnswers from "./ModalAnswers";

const Simulation = () => {
  const [totalData, setTotalData] = useState([6.5, 6.5, 7, 8]);
  const [progress, setProgress] = useState(0);
  const [totalColor, setTotalColor] = useState([
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 99, 132, 1)",
  ]);
  const [prev, setPrev] = useState([1, 1, 1, 1, 1, 1]);

  const handleChart = (c, id) => {
    let tempTotalData = [...totalData];
    let bar = progress;
    switch (id) {
      case "ImproveTransportationHabits":
        switch (c) {
          case "1":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] += (prev[0] - 1) * 0.5;
            }
            bar -= (prev[0] - 1) * 7;
            prev[0] = 1;
            setPrev(prev);
            break;
          case "2":
            if (prev[0] > 2) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += (prev[0] - 2) * 0.5;
              }
              bar -= (prev[0] - 2) * 7;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (2 - prev[0]) * 0.5;
              }
              bar += (2 - prev[0]) * 7;
            }
            prev[0] = 2;
            setPrev(prev);
            break;
          case "3":
            if (prev[0] > 3) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += 0.5;
              }
              bar -= 7;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (3 - prev[0]) * 0.5;
              }
              bar += (3 - prev[0]) * 7;
            }
            prev[0] = 3;
            setPrev(prev);
            break;
          case "4":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] -= (4 - prev[0]) * 0.5;
            }
            bar += (4 - prev[0]) * 7;
            prev[0] = 4;
            setPrev(prev);
            break;
          default:
            break;
        }
        break;

      case "LivingHabits":
        switch (c) {
          case "1":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] += (prev[1] - 1) * 0.4;
            }
            bar -= (prev[1] - 1) * 6.5;
            prev[1] = 1;
            setPrev(prev);
            break;
          case "2":
            if (prev[1] > 2) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += (prev[1] - 2) * 0.4;
              }
              bar -= (prev[1] - 2) * 6.5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (2 - prev[1]) * 0.4;
              }
              bar += (2 - prev[1]) * 6.5;
            }
            prev[1] = 2;
            setPrev(prev);
            break;
          case "3":
            if (prev[1] > 3) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += 0.4;
              }
              bar -= 6.5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (3 - prev[1]) * 0.4;
              }
              bar += (3 - prev[1]) * 6.5;
            }
            prev[1] = 3;
            setPrev(prev);
            break;
          case "4":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] -= (4 - prev[1]) * 0.4;
            }
            bar += (4 - prev[1]) * 6.5;
            prev[1] = 4;
            setPrev(prev);
            break;
          default:
            break;
        }
        break;

      case "ImproveRecyclingHabits":
        switch (c) {
          case "1":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] += (prev[2] - 1) * 0.1;
            }
            bar -= (prev[2] - 1) * 5;
            prev[2] = 1;
            setPrev(prev);
            break;
          case "2":
            if (prev[2] > 2) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += (prev[2] - 2) * 0.1;
              }
              bar -= (prev[2] - 2) * 5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (2 - prev[2]) * 0.1;
              }
              bar += (2 - prev[2]) * 5;
            }
            prev[2] = 2;
            setPrev(prev);
            break;
          case "3":
            if (prev[2] > 3) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += 0.1;
              }
              bar -= 5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (3 - prev[2]) * 0.1;
              }
              bar += (3 - prev[2]) * 5;
            }
            prev[2] = 3;
            setPrev(prev);
            break;
          case "4":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] -= (4 - prev[2]) * 0.1;
            }
            bar += (4 - prev[2]) * 5;
            prev[2] = 4;
            setPrev(prev);
            break;
          default:
            break;
        }
        break;
      case "FossilFuelCombustion":
        switch (c) {
          case "1":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] += (prev[3] - 1) * 0.5;
            }
            bar -= (prev[3] - 1) * 8;
            prev[3] = 1;
            setPrev(prev);
            break;
          case "2":
            if (prev[3] > 2) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += (prev[3] - 2) * 0.5;
              }
              bar -= (prev[3] - 2) * 8;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (2 - prev[3]) * 0.5;
              }
              bar += (2 - prev[3]) * 8;
            }
            prev[3] = 2;
            setPrev(prev);
            break;
          case "3":
            if (prev[3] > 3) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += 0.5;
              }
              bar -= 8;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (3 - prev[3]) * 0.5;
              }
              bar += (3 - prev[3]) * 8;
            }
            prev[3] = 3;
            setPrev(prev);
            break;
          case "4":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] -= (4 - prev[3]) * 0.5;
            }
            bar += (4 - prev[3]) * 8;
            prev[3] = 4;
            setPrev(prev);
            break;
          default:
            break;
        }
        break;
      case "PhotovoltaicParks":
        switch (c) {
          case "1":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] += (prev[4] - 1) * 0.4;
            }
            bar -= (prev[4] - 1) * 7.5;
            prev[4] = 1;
            setPrev(prev);
            break;
          case "2":
            if (prev[4] > 2) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += (prev[4] - 2) * 0.4;
              }
              bar -= (prev[4] - 2) * 7.5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (2 - prev[4]) * 0.4;
              }
              bar += (2 - prev[4]) * 7.5;
            }
            prev[4] = 2;
            setPrev(prev);
            break;
          case "3":
            if (prev[4] > 3) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += 0.4;
              }
              bar -= 7.5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (3 - prev[4]) * 0.4;
              }
              bar += (3 - prev[4]) * 7.5;
            }
            prev[4] = 3;
            setPrev(prev);
            break;
          case "4":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] -= (4 - prev[4]) * 0.4;
            }
            bar += (4 - prev[4]) * 7.5;
            prev[4] = 4;
            setPrev(prev);
            break;
          default:
            break;
        }
        break;
      case "WindEnergy":
        switch (c) {
          case "1":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] += (prev[5] - 1) * 0.3;
            }
            bar -= (prev[5] - 1) * 5;
            prev[5] = 1;
            setPrev(prev);
            break;
          case "2":
            if (prev[5] > 2) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += (prev[5] - 2) * 0.3;
              }
              bar -= (prev[5] - 2) * 5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (2 - prev[5]) * 0.3;
              }
              bar += (2 - prev[5]) * 5;
            }
            prev[5] = 2;
            setPrev(prev);
            break;
          case "3":
            if (prev[5] > 3) {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] += 0.3;
              }
              bar -= 5;
            } else {
              for (let i = 0; i < tempTotalData.length; i++) {
                tempTotalData[i] -= (3 - prev[5]) * 0.3;
              }
              bar += (3 - prev[5]) * 5;
            }
            prev[5] = 3;
            setPrev(prev);
            break;
          case "4":
            for (let i = 0; i < tempTotalData.length; i++) {
              tempTotalData[i] -= (4 - prev[5]) * 0.3;
            }
            bar += (4 - prev[5]) * 5;
            prev[5] = 4;
            setPrev(prev);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    if (tempTotalData[3] < 1.5) {
      setTotalData([0.5, 0.7, 0.9, 1.4]);
    } else {
      setTotalData(tempTotalData);
    }

    if (bar > 100) {
      setProgress(100);
      setTotalColor(["rgba(25, 135, 84, 0.2)", "rgba(25, 135, 84, 1)"]);
    } else if (bar < 0) {
      setProgress(0);
      setTotalColor(["rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 1)"]);
    } else if (bar >= 55) {
      setProgress(bar);
      setTotalColor(["rgba(25, 135, 84, 0.2)", "rgba(25, 135, 84, 1)"]);
    } else {
      setProgress(bar);
      setTotalColor(["rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 1)"]);
    }
  };

  return (
    <div className="container-fluid py-3">
      <ProgressBar progress={progress}></ProgressBar>
      <ModalAnswers></ModalAnswers>
      <div className="row justify-content-md-center">
        <div className="col-md-auto p-0 rounded mt-5 mt-lg-0 pt-5 pt-lg-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 px-1 pb-1 rounded mt-0 mt-md-5 mt-lg-0 pt-md-5 pt-0 pt-lg-0">
          <ChartContent
            totalData={totalData}
            totalColor={totalColor}
          ></ChartContent>
        </div>
        <div className="col-lg-2 p-0 rounded">
          <TuningBar handleChart={handleChart}></TuningBar>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
