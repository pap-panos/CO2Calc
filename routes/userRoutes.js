// Import All Dependencies
const express = require("express");
const router = express.Router();

// Require Users Services
const userServices = require("../services/userServices");

// Users Requests
// Get All Users
router.get("/", async (req, res) => {
  console.log("Get All Users");
  const users = await userServices.getUsers();
  res.send(users);
});

// Export Users Routes
module.exports = router;
