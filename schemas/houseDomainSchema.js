const mongoose = require("mongoose");

// House Domain Schema Or Document Structure
const houseDomainSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    measurementUnits: [
      {
        name: { type: String, required: true },
        weight: { type: Number, required: true },
      },
    ],
  },
  { collection: "houseDomains" }
);

// Export House Domain Schema
module.exports = { houseDomainSchema };
