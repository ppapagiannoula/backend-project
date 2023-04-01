const products = []; //We dont have a database yet but we have an array


// =>GET  /admin/add-product 
exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); DONT USE! We cant pass node.js code inside the the html files.
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};



// =>POST  /admin/add-product 
exports.postAddProduct = (req, res, next) => {
  //store product to database...
  products.push({ title: req.body.title }); //We only push a title from the req.body cause our form has only one input field. the title.
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