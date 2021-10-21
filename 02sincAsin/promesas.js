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

function buscarLibroPorId(id){
    return new Promise((resolve, reject)=>{
        const libro = libros.find((libro)=> libro.id===id );
        if (!libro)
        {
            const error= new Error();
            error.message="El libro no fue encontrado";
            reject(error);
        }
        resolve(libro);

    })

}

function buscarAutorPorId(id){
    return new Promise((resolve, reject)=>{
        const autor =  autores.find((autor)=>{
            return autor.id===id;
        });
        if (!autor)
        {
            const error =  new Error();
            error.message="No pudimos encontrar el autor";
            reject(error);
        }
        //libro.autor = autor;
        resolve(autor);
    })
}
function buscarPaisPorIdAutor(idAutor){
 
    return new Promise((resolve, reject)=>{

    })
}


buscarLibroPorId(1).then((libro)=>{
    return buscarAutorPorId(libro.idautor);
}).then((autor)=>{
    //return buscarPaisPorIdAutor(libro.idautor);
    console.log(autor)
})
// .then((pais)=>{
//     console.log(pais)
// })
.catch((error)=>{
    console.log(error.message)
})
