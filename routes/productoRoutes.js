const express = require('express');
const productoRouter = express.Router();
const { getAllProductos, createProducto, editProducto, deleteProducto, getProducto } = require('../controllers/productoController.js');


productoRouter
.route('/')
.get(getAllProductos)
.get(getProducto)
.post(createProducto)
.put(editProducto)
.delete(deleteProducto)


module.exports = productoRouter;