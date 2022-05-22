// Import Dependencies
const express = require("express");
const router = express.Router();

// Require Users Services
const countryServices = require("../services/countryServices");

//Country Routes

// Add Country
router.post("/add-country", async (req, res) => {
  console.log("Add a country");

  //Call function to add country to db
  const result = await countryServices.addCountry(req.body);

  //Response send to front end
  if (result) {
    res.status(200).send("Country was successfully added to the DB!");
  } else {
    res.status(400).send("Error coutry was NOT added to DB...");
  }
});

// Export Users Routes
module.exports = router;
