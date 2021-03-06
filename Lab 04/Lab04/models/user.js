var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var usuarios_schema = new Schema({
    usuario: String,
    contrasena: String
});
prod_model = mongoose.model('usuarios', usuarios_schema,'usuarios');

module.exports = {
    show: function(req,res){
        prod_model.find({},function(err,items){
            if (!err) {
               res.render('table1',{data: items});
            }else{
                return console.log(err);
            }
        });
    },
    create: function(req,res){
        var item = {
            nombre: req.query.nombre,
            descripcion: req.query.descripcion,
            precio: req.query.precio
        };
        var nuevo = new prod_model(item).save();
        res.send(nuevo);
    },
    update: function(req,res){
        prod_model.findOne({_id: req.query._id},function(err,producto){
            producto.nombre = req.query.nombre;
            producto.descripcion = req.query.descripcion;
            producto.precio = req.query.precio;
            producto.save();
            res.send(producto);
        });
    },
    delete: function(req,res){
        prod_model.findOne({_id: req.query._id},function(err,producto){
            producto.remove();
            res.send({status:true});
        })
    },
};