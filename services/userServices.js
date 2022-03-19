// Require Users Model
const { User } = require("../models/userModel");

// User Services
// Get All Users
async function getUsers() {
  const users = await User.find();
  console.log(users);
  return users;
}

// Register User
async function registerUser(email, username, password) {
  try {
    //Declaring a user with User Model
    const createUser = new User({
      email: email,
      username: username,
      password: password,
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
    return false;
  }
}

// Export Users Services
module.exports = { getUsers, registerUser };
