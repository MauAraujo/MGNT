var express = require('express');
var app = express();
var router = express.Router();
var Article = require('../models/article'); 

router.get('/', function(req, res){
    //res.sendFile('/views/articulos.html', {"root": "../MGNT/public"});
    //Puedes encontrar un articulo con cualquier propiedad
    Article.findOne({'title':'sad'}, 'title content publicationDate', function(err, articulo){
        if (err) {
            console.log('error querying database');
        }
        console.log('Título: %s, Cuerpo: %s, Fecha: %s', articulo.title, articulo.content, articulo.publicationDate);
    });

});

router.post('/', function(req, res){

});

router.put('/', function(req, res){
    res.sendStatus(403);
});

router.delete('/', function(req, res){
    res.sendStatus(403);
});

module.exports = router;
