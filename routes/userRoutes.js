// Import Dependencies
const express = require("express");
const router = express.Router();

// Require Users Services
const userServices = require("../services/userServices");

const authenticate = require("../middleware/authenticate");

// Users Requests

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

// Login User
router.post("/login", async (req, res) => {
  console.log("Login User");

  // Get body or Data
  const email = req.body.email;
  const password = req.body.password;

  //Call function to register user to db
  const userToken = await userServices.loginUser(email, password);
  //userToken is either null or the users token value from the db

  //Response send to front end
  if (userToken !== null) {
    //userToken contains the users token!
    res.cookie("jwt", userToken, {
      // Expires Token in 24 Hours
      expires: new Date(Date.now() + 86400000),
      httpOnly: false,
    });

    res.status(200).send("LoggedIn");
  } else {
    res.status(400).send("Invalid Credentials");
  }
});

//Logout User
router.get("/logout", async (req, res) => {
  res.clearCookie("jwt", { path: "/" });
  res.status(200).send("User Logged Out");
});

// Authentication
router.get("/auth", authenticate, async (req, res) => {});

//Get All Users
router.get("/", async (req, res) => {
  const users = await userServices.getUsers();
  res.send(users);
});

// Export Users Routes
module.exports = router;
