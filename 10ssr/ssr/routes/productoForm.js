var express = require('express');
var router = express.Router();

const axios = require('axios');



router.post('/producto/operar', (req,res,next)=>{

    console.log(req.body)

    if (req.body._id==="")
    {
        axios.post(`http://localhost:5000/v1/pruebas/api/productos`,{
            nombre: req.body.nombre,
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo
        }).then(respuesta=>{
            res.redirect('/');
        })

    }
    else
    {
        axios.put(`http://localhost:5000/v1/pruebas/api/productos/${req.body._id}`,{
            nombre: req.body.nombre,
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo
        }).then(respuesta=>{
            res.redirect('/');
        })


    }

})


module.exports = router;