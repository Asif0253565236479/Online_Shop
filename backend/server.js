const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const ProductRouter = require('./routers/ProductRouter.js')

connectDB()

const app = express()

app.use(express.json());

app.use('/api/products' , ProductRouter)

const PORT = process.env.PORT || 5000 
app.listen(PORT , ()=> console.log(`Sercer is Running at http://localhost:${PORT}`))

