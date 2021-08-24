const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')

connectDB()
const app = express()
const PORT = process.env.PORT || 5000 
app.listen(PORT , ()=> console.log(`Sercer is Running at http://localhost:${PORT}`))

