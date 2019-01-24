var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Ruta Hola
router.get('/hola', function(req, res, next) {
  res.render('hola',{});
});

//Ruta Expediente
router.get('/expediente', function(req, res, next) {
  res.render('expediente',{});
});

//Ruta Adios 
router.get('/adios', function(req, res, next) {
  res.json({"mensaje":"adios"});
});
 
module.exports = router;

