const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct); //when the user visits the http://localhost:3000/admin/add-product

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct); //when the user press the submit button in the form of the http://localhost:3000/admin/add-product

module.exports = router;