module.exports = (sequelize, type) => {
    const Reporte = sequelize.define('reportes', {
        idReporte: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idSupermercado: {
            type: type.INTEGER
        }


    });

    return Reporte;


};