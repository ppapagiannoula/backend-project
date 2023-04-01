const express = require('express');

const shopController = require('../controllers/shop');
const router = express.Router();


// / => GET root page
router.get('/',shopController.getIndex);
router.get('/product-list', shopController.getAllProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

router.get('/products/:productId', shopController.getProduct); //get the specific product
module.exports = router;