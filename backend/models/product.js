const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type:String ,
        required: true
    },
    discription:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    countInStok:{
        type: Number,
        required:true
    },
    image:{
        type: String,
        required:true
    }
})


const product = mongoose.model('product' , productSchema)

module.exports = product;