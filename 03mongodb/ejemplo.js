const mongoose = require("mongoose");
// const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/sextob?retryWrites=true&w=majority";
const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/Militao?retryWrites=true&w=majority";
( async ()=>{
    const estado= await mongoose.connect(conexion);
    const Grupo = mongoose.model("Grupo", {nombre:String});
    const Usuario =  mongoose.model("Usuario", {nombre:String, idgrupo:{ type:mongoose.Schema.Types.ObjectId, ref:"Grupo" }});

    
    const grupo1=  new Grupo({nombre:"Grupo 1"});
    
    const guardoGrupo= await grupo1.save();
    
    console.log(guardoGrupo)
    console.log(guardoGrupo._id)
    
    const usuario1=  new Usuario({nombre:"Usuario1", idgrupo:guardoGrupo._id});

     const guardoUsuario= await usuario1.save();
     console.log(guardoUsuario)

    // const resultado= await Usuario.find();
    // console.log(resultado)
})();







