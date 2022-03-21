module.exports = (sequelize, type) => {
    const Supermercado = sequelize.define('supermercados', {
        idSupermercado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING
        },
        idProducto: {
            type: type.INTEGER,

        }
    });
    return Supermercado;

    Supermercado.hasMany(Supermercado, { foreingKey: "idProducto" });
};