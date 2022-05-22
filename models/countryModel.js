const mongoose = require("mongoose");
const { countrySchema } = require("../schemas/countrySchema");

const Country = mongoose.model("countries", countrySchema);
module.exports = { Country };
