const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const configureMiddlewares = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
};

module.exports = configureMiddlewares;