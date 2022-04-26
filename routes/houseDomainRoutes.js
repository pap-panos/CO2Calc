// Import Dependencies
const express = require("express");
const router = express.Router();

// Require house domain services
const houseDomainServices = require("../services/houseDomainServices");

// Middleware
const authAdmin = require("../middlewares/authAdmin");

// House Domain Requests

// INSERT
router.post("/insertHouseDomain", authAdmin, async (req, res) => {
  //print the route that is called
  console.log("Insert House Domain");

  //Get the data from the body of the request
  const name = req.body.name;
  const weight = req.body.weight;
  const measurementUnits = req.body.measurementUnits;

  //Call function to insert house domain to db
  const inserted = await houseDomainServices.insertHouseDomain(
    name,
    weight,
    measurementUnits
  );

  //Response send to front end
  if (inserted) {
    res.status(200).send("House domain was inserted successfully!");
  } else {
    res.status(400).send("Error house domain was NOT inserted...");
  }
});

// GET
router.get("/getHouseDomains", async (req, res) => {
  //call get func from services and store result to hDs variable
  const hDs = await houseDomainServices.getHouseDomains();

  //check the result
  if (hDs === null) {
    //no documents where found
    res.status(400).send("Error no house domains where found...");
  } else {
    //return to front end the retrieved house domain documents
    res.send(hDs);
  }
});

// Export House Domain Routes
module.exports = router;
