require('dotenv').config();
const connectDB = require('./config/db')
const productData = require('./data/product')
const Product = require('./models/product')


connectDB()

const importProduct = async () =>{
    try {
        await Product.deleteMany({})
        await Product.insertMany(productData)

        console.log("Product Insert Successed")
        process.exit()
    } catch (error) {
        console.error("Product Import Fail")
        process.exit(1)
    }
}

importProduct();