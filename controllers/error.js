const path = require("path");
const mainFolder = require("../utilities/path");
const express = require("express");

exports.get404 = (req, res, next) => {
  //render the error page
  res.status(404).render('404',{
    pageTitle : 'Page 404'
  })
};