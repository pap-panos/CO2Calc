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

// Register User
router.post("/register", async (req, res) => {
  console.log("Register User");

  // Get body or Data
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  //Call function to register user to db
  const registered = await userServices.registerUser(email, username, password);

  //Response send to front end
  if (registered) {
    res.status(200).send("Registered");
  } else {
    res.status(400).send("Error NOT registered");
  }
});

// Export Users Routes
module.exports = router;
