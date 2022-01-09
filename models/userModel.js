const mongoose = require("mongoose");
const { userSchema } = require("../schemas/userSchema");

const User = mongoose.model("Users", userSchema);
module.exports = { User };
