const express = require('express')
const router = express.Router()
const {GetProductById , GetAllProducts} = require('../controls/productControler')

//@Route Get All Products From api/products
//@desc Get All Products From db
//@Access Public
router.get('/' , GetAllProducts)

//@Route Get Product From api/products/:id
//@desc Get Product by id From db
//@Access Public
router.get('/:id' , GetProductById )

module.exports = router