const express = require("express");
var morgan = require('morgan');
const bodyParser = require("body-parser");
const routes = require('../routes/index');
const {login} = require("../controllers/AuthController");
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Pizza Hut API',
        description: 'Open API for our Pizza Hut project',
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => console.log('Swagger generated'));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;