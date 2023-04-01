// const http = require('http');
const express = require('express');
// const bodyParser =require('body-parser');
const errorController = require('./controllers/error');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use(express.json()); 
app.use(express.urlencoded({extended: false})); //true: precises that the req.body object will contain values of any type instead of just strings

app.use(express.static(path.join(__dirname,'public'))); //Needs to be static for using vanilla css/js on templating engines. We use path npm package to create paths easy

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Error);

app.listen(3000);
