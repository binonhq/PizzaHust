const express = require("express");
var morgan = require('morgan');
const bodyParser = require("body-parser");
const routes = require('../routes/index');
const cors = require("cors");
const cookieParser = require("cookie-parser")


const app = express();
app.use(cookieParser())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
   credentials: true,
   origin: 'http://localhost:5173',
}));
app.use('/', routes);

module.exports = app;