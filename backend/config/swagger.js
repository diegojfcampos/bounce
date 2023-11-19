const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path'); // Adicione esta linha

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bounce Insights',
      version: '1.0.0',
      description: 'Software Engineer Intern coding challenge',
    },
    servers: [
      {
        url: 'http://localhost:3002',
      },
    ],
  },
  apis: [path.join(__dirname, '../routes/**/*.js')],
};

const specs = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs),
};
