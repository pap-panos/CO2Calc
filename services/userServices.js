// Require Users Model
const { User } = require("../models/userModel");

// User Services
// Get All Users
async function getUsers() {
  const users = await User.find();
  console.log(users);
  return users;
}

// Export Users Services
module.exports = { getUsers };
