const express = require('express');

const productsController = require('../controllers/products');
const router = express.Router();


// / => GET root page
router.get('/',productsController.getAllProducts);
// router.get('/',productsController.getProduct);

module.exports = router;