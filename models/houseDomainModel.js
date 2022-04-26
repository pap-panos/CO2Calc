const mongoose = require("mongoose");
const { houseDomainSchema } = require("../schemas/houseDomainSchema");

const houseDomain = mongoose.model("houseDomains", houseDomainSchema);
module.exports = { houseDomain };
