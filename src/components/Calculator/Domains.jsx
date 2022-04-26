import React from "react";
import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Welcome from "./Welcome";
import House from "./domains/House";
import Flights from "./domains/Flights";
import Car from "./domains/Car";
import Motorbike from "./domains/Motorbike";
import BusRail from "./domains/BusRail";
import Demographic from "./domains/Demographic";
import Results from "./results/Results";

const Questions = ({ role }) => {
  const [activeTab, setActiveTab] = useState("welcome");
  const [cities, setCities] = useState();
  const [cityRes, setCityRes] = useState(0);
  const [countryRes, setCountryRes] = useState(0);
  const [car, setCar] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [motorbike, setMotorbike] = useState(0);
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

  const handleCarRes = (distance, age, efficiency) => {
    let total = Math.round(
      distance / 2500 + 20 / parseInt(age) + efficiency * 0.5
    );
    setCar(total);
  };

  const handleMotorbikeRes = (distance, age, efficiency) => {
    let total = Math.round(
      distance / 2500 + 20 / parseInt(age) + efficiency * 0.5
    );
    setMotorbike(total);
  };

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
        <Tab title="House" eventKey="house" id="house-tab">
          <House
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            role={role}
            start={start}
            end={end}
          ></House>
        </Tab>
        <Tab title="Flights" eventKey="flights" id="flights-tab">
          <Flights toNextTab={toNextTab} toPrevTab={toPrevTab}></Flights>
        </Tab>
        <Tab title="Car" eventKey="car" id="car-tab">
          <Car
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            handleCarRes={handleCarRes}
            start={start}
            end={end}
            role={role}
          ></Car>
        </Tab>
        <Tab title="Motorbike" eventKey="motorbike" id="motorbike-tab">
          <Motorbike
            toNextTab={toNextTab}
            toPrevTab={toPrevTab}
            handleMotorbikeRes={handleMotorbikeRes}
            start={start}
            end={end}
          ></Motorbike>
        </Tab>
        <Tab title="Bus & Rail" eventKey="bus&rail" id="bus&rail-tab">
          <BusRail toPrevTab={toPrevTab} toNextTab={toNextTab}></BusRail>
        </Tab>
        <Tab title="Results" eventKey="results" id="results-tab">
          <Results
            toPrevTab={toPrevTab}
            countryRes={countryRes}
            cityRes={cityRes}
            car={car}
            motorbike={motorbike}
            city={city}
            country={country}
          ></Results>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Questions;
