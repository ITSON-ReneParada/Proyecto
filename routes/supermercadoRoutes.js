const express = require('express');
const supermercadoRouter = express.Router();
const { createSupermercado, deleteSupermercado, editSupermercado, getAllSupermercados, getSupermercado } = require('../controllers/supermercadoController.js')


supermercadoRouter.get('/all', getAllSupermercados);

supermercadoRouter.get('/find/:idSupermercado', getSupermercado);

supermercadoRouter.post('/new', createSupermercado);

supermercadoRouter.put('/edit/:idSupermercado', editSupermercado);

supermercadoRouter.delete('/delete/:idSupermercado', deleteSupermercado);


module.exports = supermercadoRouter;