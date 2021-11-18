const {Schema, model} =  require('mongoose');


const ProductoSchema = Schema({
    nombre:{
        type:String,
        required: [ true, 'El nombre es obligatorio'],
        unique: true
    },
    estado:{
        type: Boolean,
        default: true,
        required:true
    },
    precio:{
        type:Number,
        default:0
    },
    costo:{
        type:Number,
        default:0
    },
    minimo:{
        type:Number,
        default:0
    }
})

ProductoSchema.methods.toJSON = function(){
    const { __v, estado,  ...data } =  this.toObject();
    return data;
}

module.exports= model('Producto', ProductoSchema)