const mongoose = require("mongoose");

// Car Domain Schema Or Document Structure
const carDomainSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.ObjectId,
      default: "628ab5b860b82ece3e67ebe0",
      ref: "users",
    },
    type: {
      type: String,
      default: "Citizen",
    },
    init_val: {
      type: Number,
      default: 12.41,
    },
    country: {
      type: Object,
    },
    liters_100Km: {
      type: Number,
      required: function () {
        return this.electric_car == false;
      },
    },
    type_of_fuel: {
      type: Number,
      required: function () {
        return this.electric_car == false;
      },
    },
    public_transportation: {
      type: Number,
      required: function () {
        return this.electric_car == false;
      },
    },
    electric_car: {
      type: Boolean,
    },
    result: {
      type: Number,
    },
  },
  {
    collection: "carDomains",
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

// Calculating the result
carDomainSchema.pre("save", async function (next) {
  const carDomain = this;
  //   if (carDomain.electric_car) {
  //     carDomain.result =
  //       carDomain.init_val *
  //       carDomain.country.car_distance_travelled_cf *
  //       0.156 *
  //       carDomain.country.co2_per_kWh_cf;
  //   } else {
  //     carDomain.result =
  //       ((carDomain.init_val * carDomain.country.car_distance_travelled_cf) /
  //         100) *
  //       carDomain.liters_100Km *
  //       carDomain.type_of_fuel *
  //       carDomain.public_transportation;
  //   }
  carDomain.result = carDomain.electric_car
    ? carDomain.init_val *
      carDomain.country.car_distance_travelled_cf *
      0.156 *
      carDomain.country.co2_per_kWh_cf
    : ((carDomain.init_val * carDomain.country.car_distance_travelled_cf) /
        100) *
      carDomain.liters_100Km *
      carDomain.type_of_fuel *
      carDomain.public_transportation;
  next();
});

// Export User Schema
module.exports = { carDomainSchema };
