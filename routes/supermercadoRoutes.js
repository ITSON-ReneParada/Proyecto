const express = require('express');
const supermercadoRouter = express.Router();
const { createSupermercado, deleteSupermercado, editSupermercado, getAllSupermercados, getSupermercado } = require('../controllers/supermercadoController.js')


supermercadoRouter.get(getAllSupermercados)
supermercadoRouter.get(getSupermercado)
supermercadoRouter.post(createSupermercado)
supermercadoRouter.put(editSupermercado)
supermercadoRouter.delete(deleteSupermercado)


module.exports = supermercadoRouter;