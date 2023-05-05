//app requirements
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
//importing schemas/models
const User = require("./models/user");

//calling 404 controller
// const errorController = require('./controllers/error');

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const MONGODB_URI =
  "mongodb+srv://psnod:panos123@cluster0.dgofkdg.mongodb.net/?retryWrites=true&w=majority";

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

//settign up template engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
// const authRoutes = require('./routes/auth');


//setting up the default path
// app.use(express.static(path.join(__dirname, 'public')));

//seting up the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Session
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    store: store,
    // cookie: { secure: true },
  })
);

//default user
app.use((req, res, next) => {
  User.findById('6453aeb47327521093eb5ef5')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

//Path setUp
app.use(express.static(path.join(__dirname, "public")));
//listening to routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
// app.use(authRoutes);

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