import React from "react";
import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Welcome from "./questions/Welcome";
import House from "./questions/House";
import Flights from "./questions/Flights";
import Car from "./questions/Car";
import Motorbike from "./questions/Motorbike";
import BusRail from "./questions/BusRail";
import Demographic from "./questions/Demographic";
import Results from "./results/Results";

const Questions = () => {
  const [activeTab, setActiveTab] = useState("welcome");
  const [cityRes, setCityRes] = useState(4);
  const [countryRes, setCountryRes] = useState(4);

  const handleCity = (e) => {
    if (e === "1") {
      setCityRes(68);
    } else if (e === "2") {
      setCityRes(58);
    } else {
      setCityRes(48);
    }
  };

  const handleCountry = (e) => {
    if (e === "1") {
      setCountryRes(60);
    } else if (e === "2") {
      setCountryRes(50);
    } else {
      setCountryRes(40);
    }
  };

  function nextTabChange() {
    if (activeTab === "welcome") {
      setActiveTab("demographic");
    }
    if (activeTab === "demographic") {
      setActiveTab("house");
    }
    if (activeTab === "house") {
      setActiveTab("flights");
    }
    if (activeTab === "flights") {
      setActiveTab("car");
    }
    if (activeTab === "car") {
      setActiveTab("motorbike");
    }
    if (activeTab === "motorbike") {
      setActiveTab("bus&rail");
    }
    if (activeTab === "bus&rail") {
      setActiveTab("results");
    }
  }

  function prevTabChange() {
    if (activeTab === "demographic") {
      setActiveTab("welcome");
    }
    if (activeTab === "house") {
      setActiveTab("demographic");
    }
    if (activeTab === "flights") {
      setActiveTab("house");
    }
    if (activeTab === "car") {
      setActiveTab("flights");
    }
    if (activeTab === "motorbike") {
      setActiveTab("car");
    }
    if (activeTab === "bus&rail") {
      setActiveTab("motorbike");
    }
    if (activeTab === "results") {
      setActiveTab("bus&rail");
    }
  }

  function toNextTab(e) {
    e.preventDefault();
    nextTabChange();
  }

  function toPrevTab(e) {
    e.preventDefault();
    prevTabChange();
  }

  return (
    <div className="container my-3 p-2 bg-light rounded">
      <Tabs
        activeKey={activeTab}
        transition={true}
        onSelect={(e) => setActiveTab(e)}
      >
        <Tab title="Welcome" eventKey="welcome" id="welcome-tab">
          <Welcome
            toNextTab={toNextTab}
            handleCountry={handleCountry}
          ></Welcome>
        </Tab>
        <Tab title="Demographic" eventKey="demographic" id="demographic-tab">
          <Demographic
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            handleCity={handleCity}
          ></Demographic>
        </Tab>
        <Tab title="House" eventKey="house" id="house-tab">
          <House toNextTab={toNextTab} toPrevTab={toPrevTab}></House>
        </Tab>
        <Tab title="Flights" eventKey="flights" id="flights-tab">
          <Flights toNextTab={toNextTab} toPrevTab={toPrevTab}></Flights>
        </Tab>
        <Tab title="Car" eventKey="car" id="car-tab">
          <Car toNextTab={toNextTab} toPrevTab={toPrevTab}></Car>
        </Tab>
        <Tab title="Motorbike" eventKey="motorbike" id="motorbike-tab">
          <Motorbike toNextTab={toNextTab} toPrevTab={toPrevTab}></Motorbike>
        </Tab>
        <Tab title="Bus & Rail" eventKey="bus&rail" id="bus&rail-tab">
          <BusRail toPrevTab={toPrevTab} toNextTab={toNextTab}></BusRail>
        </Tab>
        <Tab title="Results" eventKey="results" id="results-tab">
          <Results
            toPrevTab={toPrevTab}
            countryRes={countryRes}
            cityRes={cityRes}
          ></Results>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Questions;
