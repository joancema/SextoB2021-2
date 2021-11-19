/// CREAR SERVIDOR DE EXPRESS
const express =  require('express');
const cors  =  require('cors');

const { dbConnection } =  require('./database/config')




class Server {
    constructor(){
        this.app =  express();
        this.port = process.env.PORT;

        this.paths = {
            productos: '/api/productos',
            grupos:'/api/grupos',
            categorias:'/api/categorias'
        }

        this.conectarDB();
        this.middlewares();
        this.routes();
        
    }
    //// ASOCIAR RUTAS, MIDDLEWARES, LEVANTAR BASE DE DATOS
    async conectarDB(){
           await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use( this.paths.productos  , require('./routes/productos') )
        
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })

    }

}


module.exports = Server;