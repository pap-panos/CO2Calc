// Import All Dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Express App
const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: "./config.env" });
require("./database/connect");
const port = process.env.PORT;

// Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors());

// Required Routes
const users = require("./routes/userRoutes");

// Server Routing
app.use("/api/users", users);

// Run Server
app.listen(port, () => {
  console.log("CO2 Footprint Calculator SERVER is UP and running!");
});
