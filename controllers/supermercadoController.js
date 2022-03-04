const db = require('../config/db.js');

module.exports.getAllSupermercados = (req, res) => {
    db.Supermercado.findAll().then(Supermercados => res.json(Supermercados))
};

module.exports.createSupermercado = (req, res) => {
    db.Supermercado.create({
        nombre: req.body.nombre,
        precio: req.body.precio
    }).then(supermercadoCreado => res.send(supermercadoCreado));
};

module.exports.editSupermercado = (req, res) => {
    db.Supermercado.update({
        nombre: req.body.nombre,
        precio: req.body.precio
    }, {
        where: {
            idSupermercado: req.params.idSupermercado
        }
    }).then((Supermercado) => res.json(Supermercado));
};

module.exports.getSupermercado = (req, res) => {
    db.Supermercado.findAll({
        where: {
            idSupermercado: req.params.idSupermercado
        }
    }).then(Supermercado => res.send(Supermercado));
};

module.exports.deleteSupermercado = (req, res) => {
    db.Supermercado.destroy({
        where: {
            idSupermercado: req.params.idSupermercado
        }
    }).then(Supermercado => res.send(`Elimininaste el supermercado`));
};