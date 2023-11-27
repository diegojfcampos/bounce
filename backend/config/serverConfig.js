// config/serverConfig.js
const express = require("express");
const { totalRequestsCounter, prometheus } = require("./metrics");
const cors = require("cors");
const bodyParser = require("body-parser");

const configureMiddlewares = (app) => {
  // Configuring middlewares
  // Middleware to record the start time of each request
  app.use((req, res, next) => {
    res.locals.startTime = Date.now();
    next();
  });

  // Configuring middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Middleware to increment totalRequestsCounter for each incoming request
  app.use((req, res, next) => {
    totalRequestsCounter.inc();
    next();
  });
};

//Configuring Prometheus
const configureMetricsEndpoint = (app) => {
  // Endpoint to expose Prometheus metrics
  app.get("/metrics", async (req, res) => {
    try {
      res.set("Content-Type", prometheus.register.contentType);
      const metrics = await prometheus.register.metrics();
      res.end(metrics);
    } catch (error) {
      console.error("Error while getting metrics:", error);
      res.status(500).send("Internal Server Error");
    }
  });
};

const configureErrorHandling = (app) => {
  // Handling Global Errors
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });
};

module.exports = {
  configureMiddlewares,
  configureMetricsEndpoint,
  configureErrorHandling,
};
