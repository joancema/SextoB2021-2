/// traer datos de configuracion   PUERTO Y LA CADENA DE CONEXION  MONGODB_CNN Y PORT
require('dotenv').config();
const Server =  require('./server');

/// crear una instancia del servidor y levantarlo

const server =  new Server();

///LEVANTAR EL SERVIDOR
server.listen();


