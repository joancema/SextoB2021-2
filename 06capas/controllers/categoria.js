const { response, request } = require('express');
const { Categoria } = require('../models');


const obtenerCategorias =  async (req , res =  response )=>{
    const { limite= 10, desde=0 } =  req.query;
    const query = { estado:true }
    
    const [ total, categorias  ] =  await Promise.all(
        [
            Categoria.countDocuments(query),
            Categoria.find(query)
            .skip(desde)
            .limit(limite)
        ]
    );

    res.json({
        total, 
        categorias
    })
    
}

const obtenerCategoria =  async (req,res= response)=>{
    const { id } =  req.params
    const categoria = await Categoria.findById(id)
    res.json(categoria)
}

const crearCategoria = async (req, res = response)=>{
    const { estado,  ...body } = req.body;

    const existeCategoria =  await Categoria.findOne({ nombre: body.nombre });
    if (existeCategoria)
    {
        return res.status(400).json({
            msg:`La categoria con nombre ${existeCategoria.nombre} ya existe`
        })
    }

    const data  = {
        ...body,
        nombre:  body.nombre
    }

    const categoria =  new Categoria(data);
    const categoriaNueva =  await categoria.save()
    res.status(201).json(categoriaNueva);

}

const actualizarCategoria =  async(req, res = response)=>{
    const { id } =  req.params;
    const { estado,  ...data } = req.body;
    const categoriaModificada = await  Categoria.findByIdAndUpdate(id, data, {new: true } );
    res.json(categoriaModificada);

}

const borrarCategoria = async (req,res= response)=>{
    const { id } =  req.params;
    const categoriaBorrada = await  Categoria.findByIdAndUpdate(id, { estado:false }, {new: true } );
    res.json(categoriaBorrada);
}

module.exports={
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
}