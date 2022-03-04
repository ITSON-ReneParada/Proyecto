const express = require('express');
const bodyParser = require('body-parser');
const productoRouter = require('./routes/productoRoutes.js')
const supermercadoRouter = require('./routes/supermercadoRoutes')

require('./config/db.js')

//Se crea una instancia de express
const server = express();

//Middleware para JSON y codificar url
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


//Se lanza el servidor en el puerto 4000
server.listen(4000, () => {
    console.log('Servidor corriendo');
});

//Rutas
server.use('/productos', productoRouter);
server.use('/supermercados', supermercadoRouter);