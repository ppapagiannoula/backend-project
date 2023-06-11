//sandbox4f1120d5f54a4ad4812d89274a3cda83.mailgun.org domain
//68df38b9ddbfc4022cbc8e23811aa17b-db4df449-f23867ae api key


const User = require("../models/user");
const mailgun = require("../mailgun-js")({apiKey:'', domain:''});

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: '/login',
    pageTitle: "Login page",
    // isAuthenticated: req.session.isLoggedIn,
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  User.findById("64529b8bf5ed2c923d7b44fb")
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect("/");
    })
    .catch((err) => console.error(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
