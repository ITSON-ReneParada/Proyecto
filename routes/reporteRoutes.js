const express = require('express');
const reporteRouter = express.Router();
const { getReporte } = require('../controllers/reporteController.js')

reporteRouter.get('/all',getReporte);

module.exports = reporteRouter;