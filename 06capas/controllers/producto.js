const { Producto } = require('../models')
const { response } =  require('express');

///  GET   http://localhost:3000/api/productos/
const obtenerProductos= async (req, res = response)=>{
    ///  GET   http://localhost:3000/api/productos   ?limite=100?desde=0

    const { limite= 10, desde=0 } =  req.query;
    const query = { estado:true }
    
    const [ total, productos  ] =  await Promise.all(
        [
            Producto.countDocuments(query),
            Producto.find(query)
            .populate('categoria',"nombre estado")
            .skip(desde)
            .limit(limite)
        ]
    );

    res.json({
        total, 
        productos
    })
}
///  GET   http://localhost:3000/api/productos/234234234324
const obtenerProducto = async (req, res = response)=>{
    const { id } =  req.params
    const producto = await Producto.findById(id).populate('categoria')
    res.json(producto)
}
///  POST   http://localhost:3000/api/productos/       body { nombre:'', precio:23, costo:23}
const crearProducto= async (req, res= response)=>{
    const { estado,  ...body } = req.body;

    const existeProducto =  await Producto.findOne({ nombre: body.nombre });
    if (existeProducto)
    {
        return res.status(400).json({
            msg:`El producto con nombre ${existeProducto.nombre} ya existe`
        })
    }

    const data  = {
        ...body,
        nombre: body.nombre
    }

    const producto =  new Producto(data);
    const productoNuevo =  await producto.save()
    res.status(201).json(productoNuevo);

}
///  PUT   http://localhost:3000/api/productos/27364527345723645
//    body { nombre:'modificar', precio:23}
const actualizarProducto= async  (req, res = response)=>{
    const { id } =  req.params;
    const { estado,  ...data } = req.body;
    const productoModificado = await  Producto.findByIdAndUpdate(id, data, {new: true } );
    res.json(productoModificado);

}
///  DELETE   http://localhost:3000/api/productos/27364527345723645
const borrarProducto=async (req, res= response)=>{
    const { id } =  req.params;
    const productoBorrado = await  Producto.findByIdAndUpdate(id, { estado:false }, {new: true } );
    res.json(productoBorrado);
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
};