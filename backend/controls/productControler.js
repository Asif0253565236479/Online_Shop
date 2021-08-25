const Product = require('../models/product')


const GetAllProducts = async(req ,res) =>{
   

    try {
        const Products = await Product.find({})
        
        res.json(Products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}


const GetProductById = async(req ,res) =>{
   

    try {
        const Product = await Product.findById(req.params.id)

        res.json(Product)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}



module.exports = {
    GetAllProducts,
    GetProductById,
}