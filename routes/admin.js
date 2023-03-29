const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products');

// router.get('/add-product',(req,res,next)=>{
//     res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
// });

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

// router.post('/add-product',(req,res,next)=>{
//     //save to database
//     res.redirect('/');
// });

module.exports = router;