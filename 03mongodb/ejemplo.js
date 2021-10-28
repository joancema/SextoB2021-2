const mongoose = require("mongoose");
const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/sextob?retryWrites=true&w=majority";


mongoose.connect(conexion).then(respuesta=>{
    //console.log(respuesta)
}).catch(error=>{
    //console.log(error);
})

const Usuario =  mongoose.model("Usuario", {nombre:String});

const usuario1=  new Usuario({nombre:"Leixer Lucas"});

usuario1.save();

Usuario.find().then(console.log);




