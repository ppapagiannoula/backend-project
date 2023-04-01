const Product = require('../models/product');
const { patch } = require('../routes/admin');

// Root page '/'
exports.getAllProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'ALl Products',
      path: '/product-list',
    });
  })
};
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  })
};
exports.getCart = (req,res,next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle:'Your cart'
  });
};
exports.getOrders = (req,res,next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle:'Your Orders'
  });
};
exports.getCheckout = (req,res,next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle:'Checkout'
  });
};

//products
exports.getProduct = (req,res,next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-details', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};
