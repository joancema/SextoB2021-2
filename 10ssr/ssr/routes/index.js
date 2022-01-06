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
router.get('/producto/nuevo', (req,res,next)=>{
  res.render('productoForm', {});
})
router.get('/producto/modificar/:id', (req,res,next)=>{
  // consultar por id el producto y pasarlo como par[a]metro a la vista
  axios.get(`http://localhost:5000/v1/pruebas/api/productos/${req.params.id}`).then(respuesta=>{
    res.render('productoForm', {producto:  respuesta.data  });
    
  })
})
router.get('/producto/eliminar/:id', (req,res,next)=>{
  axios.delete(`http://localhost:5000/v1/pruebas/api/productos/${req.params.id}`).then(respuesta=>{
    res.redirect('/');
  })
})

module.exports = router;
