const db = require('../config/db.js')

module.exports.getReporte = (req, res) => {
    db.Reporte.findAll({
        where: {
            idSupermercado: req.params.idSupermercado
        }
    }).then(reporte => res.send(reporte));
};