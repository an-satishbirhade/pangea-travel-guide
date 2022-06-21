const mongoose = require("mongoose");
const config = require("./config");
const dbConnection = mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected ");
    },
    (error) => {
      console.log("Database not connected : " + error);
    }
  );
module.exports = dbConnection;
