const express = require('express');

const shopController = require('../controllers/shop');
const router = express.Router();


// / => GET root page
router.get('/',shopController.getAllProducts);
// router.get('/',productsController.getProduct);

module.exports = router;