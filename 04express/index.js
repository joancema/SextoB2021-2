const fs =  require("fs");
const http = require("http");

const cors = require("cors")
const express =  require("express");
const path = require("path");

const PUERTO= 8080;
const indice =  fs.readFileSync("./index.html")
const acercade =  fs.readFileSync("./about.html")
const error =  fs.readFileSync("./error.html")
const urlError =  path.join(__dirname,"./error.html" )


const server  = express();
server.use(cors()).use(express.json());

server.get('/indice', findex);

server.get('/about', (req,res)=>{
    //res.write(acercade);
    //res.end();
    res.status(200).send({
        respuesta:"ok"
    });

})

// server.use((req,res,next)=>{
//     res.status(400).sendFile(urlError);
// })

function findex (req,response){
    response.write(indice);
    response.end();
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutando http://localhost:${PUERTO}`)
})

// http.createServer((req, res)=>{
//     if (req.url==="/")
//     {
//         res.writeHead(200, { "Content-Type":"text/html" });
//         res.write(indice);
//     }
//     else if (req.url ==="/about")
//     {
//         res.writeHead(200, { "Content-Type":"text/html" });
//         res.write(acercade);

//     }
//     else
//     {
//         res.writeHead(200, { "Content-Type":"text/html" });
//         res.write(error);

//     }
//     res.end();
// }).listen(PUERTO, ()=>{
//     console.log(`Se levantO el servidor http://localhost:${PUERTO}`)
// });