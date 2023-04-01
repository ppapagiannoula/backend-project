const Product = require("../models/product");

// =>GET  /admin/add-product 
exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); DONT USE! We cant pass node.js code inside the the html files.
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};


// =>POST  /admin/add-product 
exports.postAddProduct = (req, res, next) => {
  //store product to database...
  const title = req.body.title;
  const imageURl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageURl, description, price);
  product.save();
  res.redirect('/');
};

// Root page '/'
exports.getAllProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'shop.html')); DONT USE! We cant pass node.js code inside the the html files.
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  });
};