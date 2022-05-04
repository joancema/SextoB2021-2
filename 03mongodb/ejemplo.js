const mongoose = require("mongoose");
// const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/sextob?retryWrites=true&w=majority";
const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/Milita?retryWrites=true&w=majority";
( async ()=>{
    const estado= await mongoose.connect(conexion);
    const Usuario =  mongoose.model("Usuario", {nombre:String});
    const usuario1=  new Usuario({nombre:"Prueba2"});
    const guardoUsuario= await usuario1.save();
    const resultado= await Usuario.find();
    console.log(resultado)
})();







