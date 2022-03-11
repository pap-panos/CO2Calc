const mongoose = require("mongoose");
const { userSchema } = require("../schemas/userSchema");

const User = mongoose.model("users", userSchema);
module.exports = { User };
