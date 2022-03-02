const express = require('express');
const supermercadoRouter = express.Router();
const { createSupermercado, deleteSupermercado, editSupermercado, getAllSupermercados, getSupermercado } = require('../controllers/supermercadoController.js')


supermercadoRouter.get('/all', getAllSupermercados);

productoRouter.get('/find/:idProducto', getSupermercado);

productoRouter.post('/new', createSupermercado);

productoRouter.put('/edit/:idProducto', editSupermercado);

productoRouter.delete('/delete/:idProducto', deleteSupermercado);