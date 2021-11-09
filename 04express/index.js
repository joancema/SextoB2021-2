const fs =  require("fs");
const http = require("http");

const expres =  require("express");



const PUERTO= 8080;


const indice =  fs.readFileSync("./index.html")
const acercade =  fs.readFileSync("./about.html")
const error =  fs.readFileSync("./error.html")





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