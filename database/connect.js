const mongoose = require("mongoose");

const database = process.env.DATABASE;

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection with CO2FootCalc DATABASE was successfull!");
  })
  .catch((e) => {
    console.log(e.message);
  });
