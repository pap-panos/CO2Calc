const mongoose = require("mongoose");
const { carDomainSchema } = require("../schemas/carDomainSchema");

const CarDomain = mongoose.model("carDomains", carDomainSchema);
module.exports = { CarDomain };
