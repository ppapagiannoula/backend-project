exports.get404 = (req, res, next) => {
  //render the error page
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404',
  isAuthenticated: req.isLoggedIn });
};
