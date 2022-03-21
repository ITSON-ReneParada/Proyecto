const express = require('express');
const reporteRouter = express.Router();
const { getReporte } = require('../controllers/reporteController.js')

reporteRouter
.route('/')
.get(getReporte)

module.exports = reporteRouter;