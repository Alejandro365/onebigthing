var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/hola', function(req, res, next) {
  res.json({"mensaje":"hola"});
});

module.exports = router;

// var indexRoutes = require('routes/index');
