const express = require('express');

const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.send('<h1>welcome to our eshop</h1>')
// });

router.get('/',productsController.getAllProducts);
// router.get('/',productsController.getProduct);

module.exports(router);