var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
producto = require('./models/prod'),
usuarios = require('./models/user');

app.use(bodyParser.json());

app.set('view engine','jade');

app.get('/',function(req,res){
    res.send('Hola mundo');
})

app.get('/login',usuarios.show,function(req,res){
    res.render('login');
});
app.post('/login',usuarios.show);

app.get('/table',function(req,res){
    res.render('table');
})

app.get('/producto', producto.show);
app.post('/producto', producto.create);
app.put('/producto/update', producto.update);
app.delete('/producto/delete', producto.delete);

app.listen(9090,function(){
    console.log('Iniciando 9090');
});