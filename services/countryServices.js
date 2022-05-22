// Require Country Model
const { Country } = require("../models/countryModel");

// Add a country
async function addCountry(body) {
  const {
    name,
    co2_per_kWh_cf,
    car_distance_travelled_cf,
    electricity_cf,
    heating_cf,
    waste_disposal_cf,
    waste_disposal_recycling_cf,
    waste_disposal_energy_recovery_cf,
  } = body;
  try {
    //Declaring a country with country Model
    const result = await new Country({
      name,
      co2_per_kWh_cf,
      car_distance_travelled_cf,
      electricity_cf,
      heating_cf,
      waste_disposal_cf,
      waste_disposal_recycling_cf,
      waste_disposal_energy_recovery_cf,
    }).save();

    // Save Method is Used to Insert Country
    // const result = await country.save();
    console.log(result);

    //Country created to db successfully
    return true;
  } catch (error) {
    //COuntry was not inserted to db
    console.log(error);
    return false;
  }
}

// Export Country Services
module.exports = { addCountry };
