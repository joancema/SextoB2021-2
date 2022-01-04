var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('http://localhost:5000/v1/pruebas/api/productos').then(respuesta=>{

    console.log(respuesta.data.productos)

    res.render('index', { productos:  respuesta.data.productos });

  })

  //res.render('index', { title: 'Prueba sexto b' });


});

module.exports = router;
