// Authenticate if the user logged in is the admin, is the Middle Ware Here.
// It will checked before the response.

// Require Users Model
const { User } = require("../models/userModel");

const jwt = require("jsonwebtoken");

const authAdmin = async (req, res, next) => {
  try {
    // Get the Cookies
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).send("No token");
    } else {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await User.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });

      if (!rootUser) {
        res.status(401).send("User Not Found");
      } else {
        console.log("User logged in is: " + rootUser.username);
        if (rootUser.username === "admin") {
          next();
        } else {
          res.status(401).send("User logged in is not the admin");
        }
      }
    }
  } catch (error) {
    res.status(401).send("Error");
    console.log(error);
  }
};

module.exports = authAdmin;
