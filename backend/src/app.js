//importing express and instancing Express
const express = require("express");
const app = express();

//Importing dependencies to configurate server
const configureMiddlewares = require("../config/serverConfig");
const swagger = require("../config/swagger");


try {
  //Configurating Server
  configureMiddlewares(app);
  app.use("/api/documentation", swagger.serve, swagger.setup);
  
  //Handling with global errors
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  //Routes

  const getCountry = require("./routes/countries");
  app.use("/api/country", getCountry);

  app.get("/", (req, res) => {
    res.send("API RUNNING - CHECK ENDPOINTS ON /api/documentation");
  });

} catch (error) {
  console.error("Error during server initialization:", error);
  process.exit(1);
}
module.exports = app;
