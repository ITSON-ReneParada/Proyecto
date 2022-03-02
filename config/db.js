const Sequelize = require('sequelize');

//Se importa el modelo de 
const ProductoModel = require('../models/producto');
const SupermercadoModel = require('../models/supermercado');

const sequelize = new Sequelize('proyectodb', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Se lanza la funcion para crear objeto
const Producto = ProductoModel(sequelize, Sequelize);
const Supermercado = SupermercadoModel(sequelize, Sequelize);


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })


module.exports = {
    Producto,
    Supermercado
}