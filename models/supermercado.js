module.exports = (sequelize, type) => {
    const Supermercado = sequelize.define('supermercados', {
        idSupermercado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING
        }
      /*    productos: {

        }  */
    });
    return Supermercado;


};
