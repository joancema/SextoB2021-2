const axios    =  require('axios').default;
const cheerio  = require('cheerio')
const mongoose = require('mongoose')
const cron     = require('node-cron')

const {MONGO_URI}  =  require('./config');
const { Noticias } =  require('./models');


cron.schedule("* * * * *",  async ()=>{
    // TODO: 
    //conectarme a la base de datos

    try 
    {

        const respuestaConexion =  await mongoose.connect(MONGO_URI);
        
        // obtener el html de la pAgina de CNN
        const html =  await  axios.get("https://cnnespanol.cnn.com/");
        //Obtener las noticias utilizando cheerio
        const $ = cheerio.load(html.data);
        const titulos =  $(".news__title");
        let arregloNoticias=[];
        //recorrer los nodos 
        titulos.each((index, element)=>{
            const Noticia = {
                titulo: $(element).text().toString(),
                enlace: $(element).children().attr("href")
            }
            arregloNoticias = [...arregloNoticias, Noticia];
            
        })
        //Agregar en la base de datos
        await Noticias.create(arregloNoticias);
    }
    catch(err){
        console.log(err)
    }

}
);