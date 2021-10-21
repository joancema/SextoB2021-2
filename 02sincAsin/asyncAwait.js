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

async function buscarLibroPorId(id){
    const libro = libros.find((libro)=> libro.id===id );
    if (!libro)
    {
        const error =  new Error();
        error.message="No encontramos el libro";
        throw error;
    }
    return libro;

}
async function buscarAutorPorId(id){
    const autor =  autores.find((autor)=>{
        return autor.id===id;
    });
    if (!autor)
    {
        const error = new Error();
        error.message="No encontramos el autor";
        throw error;
    }
    return autor;
}



(async ()=>{
    try
    {
        const libro  =  await buscarLibroPorId(123);
        const autor =  await buscarAutorPorId(libro.idautor);
        libro.autor = autor;
        console.log(libro)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();
