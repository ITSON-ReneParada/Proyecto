const express = require('express');
const productoRouter = express.Router();
const { getAllProductos, createProducto, editProducto, deleteProducto, getProducto } = require('../controllers/productoController.js');


productoRouter.get('/all', getAllProductos);
productoRouter.get('/find/:idProducto', getProducto);
productoRouter.post('/new', createProducto);
productoRouter.put('/edit/:idProducto', editProducto);
productoRouter.delete('/delete/:idProducto', deleteProducto);


module.exports = productoRouter;