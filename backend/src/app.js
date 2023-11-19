// Importando express e instanciando o Express
const express = require("express");
const app = express();

// Importando dependências para configurar o servidor
const configureMiddlewares = require("../config/serverConfig");

try {

  configureMiddlewares(app);
  
  // Lidando com erros globais
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  // Rotas
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
