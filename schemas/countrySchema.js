const mongoose = require("mongoose");

// country Schema Or Document Structure
const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    co2_per_kWh_cf: {
      type: Number,
    },
    car_distance_travelled_cf: {
      type: Number,
    },
    electricity_cf: {
      type: Number,
    },
    heating_cf: {
      type: Number,
    },
    waste_disposal_cf: {
      type: Number,
    },
    waste_disposal_recycling_cf: {
      type: Number,
    },
    waste_disposal_energy_recovery_cf: {
      type: Number,
    },
  },
  {
    collection: "countries",
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

// Export User Schema
module.exports = { countrySchema };
