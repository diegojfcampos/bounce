// Importing server configs
const express = require("express");
const { prometheus } = require("../config/metrics");
const app = express();
const { configureMiddlewares, configureMetricsEndpoint, configureErrorHandling } = require("../config/serverConfig");

// Configuring Prometheus to collect metrics
prometheus.collectDefaultMetrics();

// Handling Exceptions
try {
  // Implementing configs
  configureMiddlewares(app);
  configureMetricsEndpoint(app); 
  configureErrorHandling(app);

  // Instancing Routes
  const getCountry = require("./routes/countries");
  app.use("/api/country", getCountry);

  // Endpoint for checking if the API is running
  app.get("/", (req, res) => {
    res.send("API RUNNING");
  });

} catch (error) {
  console.error("Error during server initialization:", error);
  process.exit(1);
}

module.exports = app;
