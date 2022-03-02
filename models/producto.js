

module.exports = (sequelize, type) => {
    const Producto = sequelize.define('productos', {
        idProducto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING
        },
        precio: {
            type: type.FLOAT
        }
    });

    return Producto;


};
