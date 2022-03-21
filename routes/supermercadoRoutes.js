const express = require('express');
const supermercadoRouter = express.Router();
const { createSupermercado, deleteSupermercado, editSupermercado, getAllSupermercados, getSupermercado } = require('../controllers/supermercadoController.js')

supermercadoRouter
.route('/')
.get(getAllSupermercados)
.get(getSupermercado)
.post(createSupermercado)
.put(editSupermercado)
.delete(deleteSupermercado)


module.exports = supermercadoRouter;