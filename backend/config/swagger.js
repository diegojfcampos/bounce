const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bounce Insights',
      version: '1.0.0',
      description: 'Software Engineer Intern coding challenge',
    },
  },
  
  apis: ['../src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs),
};