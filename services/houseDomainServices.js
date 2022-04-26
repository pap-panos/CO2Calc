// Require house domain model
const { houseDomain } = require("../models/houseDomainModel");

// House domain services (insert, update, delete, get)

// INSERT house domain
async function insertHouseDomain(name, weight, measurementUnits) {
  try {
    //Declaring a house domain variable with house domain model
    const hD = new houseDomain({
      name: name,
      weight: weight,
      measurementUnits: measurementUnits,
    });

    // Save method is used to insert house domain
    const inserted = await hD.save();
    // print the inserted house domain
    console.log(inserted);

    //House domain inserted to db successfully,
    //it returns true
    return true;
  } catch (error) {
    //House domain was not inserted to db
    console.log(error);
    //It returns false in case of failing to insert
    return false;
  }
}

//GET all house domains
async function getHouseDomains() {
  try {
    //fetch from db all house domains documents
    //and store them to variable hDs
    const hDs = await houseDomain.find({});
    //return the retrieved documents
    return hDs;
  } catch (error) {
    //print the error
    console.log(error);
    //return null
    return null;
  }
}

// Export House Domain Services
module.exports = { insertHouseDomain, getHouseDomains };
