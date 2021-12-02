/// CREAR SERVIDOR DE EXPRESS
const express =  require('express');
const cors  =  require('cors');

const { dbConnection } =  require('./database/config')




class Server {
    constructor(){
        this.app =  express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            productos: '/api/productos',
            grupos:'/api/grupos',
            categorias:'/api/categorias'
        }

        this.conectarDB();
        this.middlewares();
        this.routes();

        this.router.use('/v1/pruebas', this.app )
        

        this._express = express().use(this.router );
        
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
        this.app.use(this.paths.categorias, require('./routes/categorias') )
        
    }
    
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })

    }

}


module.exports = Server;