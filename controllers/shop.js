const Product = require('../models/product');

// Root page '/'
exports.getAllProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  })
};