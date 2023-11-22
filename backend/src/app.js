// Importing and instancing express
const express = require("express");
const app = express();

// Importing server configs
const configureMiddlewares = require("../config/serverConfig");

//Handle exceptions
try {

  configureMiddlewares(app);
  
  //Handling with global errors
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  // Routes
  const getCountry = require("./routes/countries");
  app.use("/api/country", getCountry);


  app.get("/", (req, res) => {
    res.send("API RUNNING");
  });

} catch (error) {
  console.error("Error during server initialization:", error);
  process.exit(1);
}


module.exports = app;
