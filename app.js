// Import Dependencies
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Express App
const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: "./config.env" });
require("./database/connect");
const port = process.env.PORT;

//Setup cors options
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

// Setup express app configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
//app.set("trust proxy", 1);

// Required Routes
const users = require("./routes/userRoutes");
const countries = require("./routes/countryRoutes");
const carDomains = require("./routes/carDomainRoutes");

// Server Routing
app.use("/api/users", users);
app.use("/api/countries", countries);
app.use("/api/carDomains", carDomains);

// Run Server
app.listen(port, () => {
  console.log("CO2 Footprint Calculator SERVER is UP and running!");
});
