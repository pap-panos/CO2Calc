// Require car domain Model
const { CarDomain } = require("../models/carDomainModel");

// Save the car domain form to the db
async function saveCarDomain(body) {
  const {
    user,
    type,
    init_val,
    country,
    liters_100Km,
    type_of_fuel,
    public_transportation,
    electric_car,
  } = body;
  try {
    //Declaring car domain with car domain Model
    const result = await new CarDomain({
      user,
      type,
      init_val,
      country,
      liters_100Km,
      type_of_fuel,
      public_transportation,
      electric_car,
    }).save();

    // Save Method is Used to Insert car domain answers
    console.log(result);

    //Car domain doc inserted to db successfully
    return true;
  } catch (error) {
    //car domain doc was not inserted to db
    console.log(error);
    return false;
  }
}

// Export Country Services
module.exports = { saveCarDomain };
