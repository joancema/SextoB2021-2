const mongoose = require("mongoose");
const conexion= "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/Militao?retryWrites=true&w=majority";
( async ()=>{
    const estado= await mongoose.connect(conexion);
    const Grupo = mongoose.model("Grupo", {nombre:String});
    const Permiso = mongoose.model("Permiso", {nombre:String});
    const Usuario =  mongoose.model("Usuario",
    {nombre:String, 
    idgrupo:{ type:mongoose.Schema.Types.ObjectId, ref:"Grupo"},
    // permisos: [{ type:mongoose.Schema.Types.ObjectId, ref:"Permiso" }]
    permisos: 
    [
        { 
            permiso:{ type:mongoose.Schema.Types.ObjectId, 
            ref:"Permiso" }, estado:{type: Boolean}
        }]
});
    const grupo1=  new Grupo({nombre:"Grupo 1"});
    const permiso1=  new Permiso({nombre:"Permiso 1"});
    const permiso2=  new Permiso({nombre:"Permiso 2"});
    const guardoGrupo= await grupo1.save();
    const guardoPermiso1= await permiso1.save();
    const guardoPermiso2= await permiso2.save();
    
    // const usuario1=  new Usuario
    // (
    //     {nombre:"Usuario1",
    //      idgrupo:guardoGrupo._id,
    //     permisos:[guardoPermiso1._id,guardoPermiso2._id]});

    const usuario1=  new Usuario
    (
        {nombre:"Usuario1",
         idgrupo:guardoGrupo._id,
        permisos:[
             { permiso:guardoPermiso1._id , estado:true },
             { permiso:guardoPermiso2._id , estado:false },
        ]});

     const guardoUsuario= await usuario1.save();
    //  console.log(guardoUsuario)

     const resultado= await Usuario.find()
     .populate("idgrupo")
     .populate("permisos.permiso");
     console.log(resultado[14].permisos)
})();







