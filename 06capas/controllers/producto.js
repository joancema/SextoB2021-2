const { Producto } = require('../models')
const { response } =  require('express');


const obtenerProductos= async (req, res = response)=>{
    ///  GET   http://localhost:3000/api/productos   ?limite=100?desde=0

    const { limite= 10, desde=0 } =  req.query;
    const query = { estado:true }
    
    const [ total, productos  ] =  await Promise.all(
        [
            Producto.countDocuments(query),
            Producto.find(query).skip(desde).limit(limite)
        ]
    );

    res.json({
        total, 
        productos
    })
}
const obtenerProducto = async (req, res)=>{

}
const crearProducto= async (req, res)=>{

}
const actualizarProducto= async  (req, res)=>{

}
const borrarProducto=async (req, res)=>{

}

module.expors = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
};