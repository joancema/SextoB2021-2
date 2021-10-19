const libros=[
    {
        id:1,
        titulo:"Node Js Aplicaciones distribuidas",
        idautor:1
    },
    {
        id:2,
        titulo: "COdigo limpio con JavaScript",
        idautor:1
    },
    {
        id:3,
        titulo: "Patrones de disenio con JavaScript",
        idautor:2
    },
]
const autores=[
    {
        id:1,
        nombre:"Luis Morales",
        idpais:1
    },
    {
        id:2,
        nombre:"Anthony Carranza",
        idpais:2
    },
    {
        id:3,
        nombre:"Alexander SolOrzano",
        idpais:2
    }
]

const paises=[
    {
        id:1,
        descripcion:"Ecuador"
    },
    {
        id:2,
        descripcion:"PerU"
    },
]

function busquedaLibroPorId(id, callback  ){
    const libro = libros.find((libro)=> libro.id===id );
    if (!libro)
    {
        const error= new Error();
        error.message="Libro no encontrado";
        return callback(error);
    }
    return callback(null, libro );
}
function busquedaAutorPorId(id, callback){
    const autor =  autores.find((autor)=>{
        return autor.id===id;
    });
    if (!autor)
    {
        const error =  new Error();
        error.message= "Autor no encontrado";
        return callback(error)
    }
    return callback(null, autor)
}


busquedaLibroPorId(3, (err,libro)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    busquedaAutorPorId( libro.idautor, ( err, autor )=>{
        if (err)
        {
            return console.log(err.message);
        }
        libro.autor= autor;
        delete libro.idautor;
        console.log(libro);
    } )
})


