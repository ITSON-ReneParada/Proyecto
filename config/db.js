const Sequelize = require('sequelize');
require('dotenv').config();

//Se importa el modelo de 
const ProductoModel = require('../models/producto');
const SupermercadoModel = require('../models/supermercado');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.HOST,
    port: process.env.DB_PORT,
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