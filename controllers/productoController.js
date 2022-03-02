const db = require('../config/db.js')

module.exports.getAllProductos = (req, res) => {
    db.Producto.findAll().then(Productos => res.json(Productos))

};

module.exports.createProducto = (req, res) => {
    db.Producto.create({
        nombre: req.body.nombre,
        precio: req.body.precio
    }).then(productoCreado => res.send(productoCreado));
};


module.exports.editProducto = (req, res) => {
    db.Producto.update({
        nombre: req.body.nombre,
        precio: req.body.precio
    }, {
        where: {
            idProducto: req.params.idProducto
        }
    }).then((Producto) => res.json(Producto));
};

module.exports.getProducto = (req, res) => {
    db.Producto.findAll({
        where: {
            idProducto: req.params.idProducto
        }
    }).then(producto => res.send(producto));
};

module.exports.deleteProducto = (req, res) => {
    db.Producto.destroy({
        where: {
            idProducto: req.params.idProducto
        }
    }).then(producto => res.send('Elimininaste el producto'));
};
