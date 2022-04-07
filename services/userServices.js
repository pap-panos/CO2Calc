// Import Dependencies
const bcryptjs = require("bcryptjs");

// Require Users Model
const { User } = require("../models/userModel");

// User Services

// Register User
async function registerUser(email, username, password) {
  try {
    //Declaring a user with User Model
    const createUser = new User({
      email: email,
      username: username,
      password: password,
      role: "user",
    });

    // Save Method is Used to Create User or Insert User
    // But Before Saving or Inserting, Password will Hash
    // Because of Hashing. After Hash, It will save to DB
    const created = await createUser.save();
    console.log(created);

    //User created to db successfully
    return true;
  } catch (error) {
    //User was not inserted to db
    console.log(error);
    return false;
  }
}

// Login User
async function loginUser(email, password) {
  try {
    // Find User if Exist
    const user = await User.findOne({ email: email });

    if (user) {
      // Verify Password
      const isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        //User logged in to app successfully

        // Generate Token Which is Define in User Schema
        const token = await user.generateToken();
        return token;
      } else {
        //User could not login due to password not matching

        return null;
      }
    } else {
      //User could not login due to email not found in db
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

//Return all Users
async function getUsers() {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.log(error);
  }
}

// Export Users Services
module.exports = { registerUser, loginUser, getUsers };
