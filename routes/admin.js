const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct); //when the user visits the http://localhost:3000/admin/add-product

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct); //when the user press the submit button in the form of the http://localhost:3000/admin/add-product

module.exports = router;