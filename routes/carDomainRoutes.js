// Import Dependencies
const express = require("express");
const router = express.Router();

// Require Users Services
const carDomainServices = require("../services/carDomainServices");

//Car Domain Routes

// Save a car domain form
router.post("/save-car-dom", async (req, res) => {
  console.log("Save a car domain form");

  const result = await carDomainServices.saveCarDomain(req.body);

  //Response send to front end
  if (result) {
    res.status(200).send("Car Domain Form was successfully saved to the DB!");
  } else {
    res.status(400).send("Error car domain form was NOT saved to DB...");
  }
});

module.exports = router;
