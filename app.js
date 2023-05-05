//app requirements
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
//calling 404 controller
const errorController = require('./controllers/error');

//importing schemas/models
const User = require('./models/user');

//settign up template engine
app.set('view engine', 'ejs');
app.set('views', 'views');
//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

//setting up the body parser
app.use(express.urlencoded({ extended: false }));
//setting up the default path
app.use(express.static(path.join(__dirname, 'public')));

//default user
app.use((req, res, next) => {
  User.findById('6453aeb47327521093eb5ef5')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
//listening to routes
app.use(shopRoutes);
app.use(authRoutes);
//calling the 404 controller in case of error 404
app.use(errorController.get404);


//connecting mongoose to mongodb database
mongoose
  .connect(
    'mongodb+srv://pparaskevi16:paraskevi123@cluster0.pl2sna3.mongodb.net/test'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Paraskevi',
          email: 'pparaskevi16@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });