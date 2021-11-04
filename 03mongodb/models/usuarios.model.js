const mongoose = require("mongoose");
const { Schema } = mongoose;


const UsuariosSchema =  new Schema(
    {
        nombre:{ type:String },
        nick: {type:String}
    },
    {
        timestamps: { createdAt: true, updatedAt: true }
    }
);



module.exports =  mongoose.model("Usuarios", UsuariosSchema );