const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const products =[];


exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'add product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    //save to database
    //store product to database

    products.push({title: req.body.title});
    res.redirect('/');
}

exports.getAllProducts = (req, res, next) => {
    //fetch all products from database
    //1)Root project folder, 2)Frontend folder, 3)html file
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {
        pageTitle: 'Shop',
        path: '/',
        prods: products
    });
}
