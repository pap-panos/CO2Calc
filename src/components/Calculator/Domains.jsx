import React from "react";
import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Welcome from "./Welcome";
import Trains from "./domains/Trains";
import Cars from "./domains/Cars";
import Flights from "./domains/Flights";
import Buildings from "./domains/Buildings";
import WasteDisposal from "./domains/WasteDisposal";
import GreenStrategies from "./domains/GreenStrategies";
import Demographic from "./Demographic";
import Results from "./results/Results";

const Domains = ({ role }) => {
  const [activeTab, setActiveTab] = useState("welcome");
  const [cities, setCities] = useState();
  const [cityRes, setCityRes] = useState(0);
  const [countryRes, setCountryRes] = useState(0);
  // const [car, setCar] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [start, setStart] = useState(new Date().toLocaleDateString("el-GR"));
  let oneYear = new Date();
  oneYear.setFullYear(oneYear.getFullYear() + 1);
  const [end, setEnd] = useState(oneYear.toLocaleDateString("el-GR"));

  const handleStartDate = (e) => {
    setStart(new Date(e).toLocaleDateString("el-GR"));
  };

  const handleEndDate = (e) => {
    setEnd(new Date(e).toLocaleDateString("el-GR"));
  };

  // const handleCarRes = (distance, age, efficiency) => {
  //   let total = Math.round(
  //     distance / 2500 + 20 / parseInt(age) + efficiency * 0.5
  //   );
  //   setCar(total);
  // };

  const handleCity = (e) => {
    setCity(e);
    switch (e) {
      case "Athens":
        setCityRes(68);
        break;
      case "Brussels":
        setCityRes(58);
        break;
      case "Berlin":
        setCityRes(48);
        break;
      case "Sofia":
        setCityRes(68);
        break;
      default:
        break;
    }
  };

  const handleCountry = (e) => {
    setCountry(e);
    switch (e) {
      case "Greece":
        setCountryRes(60);
        if (cityRes > 0) {
          setCity("Athens");
          setCityRes(68);
        }
        setCities(<option value="Athens">Athens</option>);
        break;
      case "Belgium":
        setCountryRes(50);
        if (cityRes > 0) {
          setCity("Brussels");
          setCityRes(58);
        }
        setCities(<option value="Brussels">Brussels</option>);
        break;
      case "Germany":
        setCountryRes(40);
        if (cityRes > 0) {
          setCity("Berlin");
          setCityRes(48);
        }
        setCities(<option value="Berlin">Berlin</option>);
        break;
      case "Bulgaria":
        setCountryRes(60);
        if (cityRes > 0) {
          setCity("Sofia");
          setCityRes(68);
        }
        setCities(<option value="Sofia">Sofia</option>);
        break;
      default:
        break;
    }
  };

  function nextTabChange() {
    if (activeTab === "welcome") {
      setActiveTab("demographic");
    }
    if (activeTab === "demographic") {
      setActiveTab("cars");
    }
    if (activeTab === "cars") {
      setActiveTab("flights");
    }
    if (activeTab === "flights") {
      setActiveTab("trains");
    }
    if (activeTab === "trains") {
      setActiveTab("buildings");
    }
    if (activeTab === "buildings") {
      setActiveTab("wasteDisposal");
    }
    if (activeTab === "wasteDisposal") {
      setActiveTab("greenStrategies");
    }
    if (activeTab === "greenStrategies") {
      setActiveTab("results");
    }
  }

  function prevTabChange() {
    if (activeTab === "demographic") {
      setActiveTab("welcome");
    }
    if (activeTab === "cars") {
      setActiveTab("demographic");
    }
    if (activeTab === "flights") {
      setActiveTab("cars");
    }
    if (activeTab === "trains") {
      setActiveTab("flights");
    }
    if (activeTab === "buildings") {
      setActiveTab("trains");
    }
    if (activeTab === "wasteDisposal") {
      setActiveTab("buildings");
    }
    if (activeTab === "greenStrategies") {
      setActiveTab("wasteDisposal");
    }
    if (activeTab === "results") {
      setActiveTab("greenStrategies");
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
            handleStartDate={handleStartDate}
            handleEndDate={handleEndDate}
          ></Welcome>
        </Tab>
        <Tab title="Demographic" eventKey="demographic" id="demographic-tab">
          <Demographic
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            handleCity={handleCity}
            cities={cities}
          ></Demographic>
        </Tab>
        <Tab title="Cars" eventKey="cars" id="cars-tab">
          <Cars toNextTab={toNextTab} toPrevTab={toPrevTab} role={role}></Cars>
        </Tab>
        <Tab title="Flights" eventKey="flights" id="flights-tab">
          <Flights
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            start={start}
            end={end}
            role={role}
          ></Flights>
        </Tab>
        <Tab title="Trains" eventKey="trains" id="trains-tab">
          <Trains
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            start={start}
            end={end}
            role={role}
          ></Trains>
        </Tab>
        <Tab title="Buildings" eventKey="buildings" id="buildings-tab">
          <Buildings
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            start={start}
            end={end}
            role={role}
          ></Buildings>
        </Tab>
        <Tab
          title="Waste Disposal"
          eventKey="wasteDisposal"
          id="wasteDisposal-tab"
        >
          <WasteDisposal
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            start={start}
            end={end}
            role={role}
          ></WasteDisposal>
        </Tab>
        <Tab
          title="Green Strategies"
          eventKey="greenStrategies"
          id="greenStrategies-tab"
        >
          <GreenStrategies
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            start={start}
            end={end}
            role={role}
          ></GreenStrategies>
        </Tab>

        <Tab title="Results" eventKey="results" id="results-tab">
          <Results
            toPrevTab={toPrevTab}
            countryRes={countryRes}
            cityRes={cityRes}
            city={city}
            country={country}
          ></Results>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Domains;
