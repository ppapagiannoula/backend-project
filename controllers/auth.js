const User = require("../models/user");

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
