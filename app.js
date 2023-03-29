// const http = require('http');
const express = require('express');
const bodyParser =require('body-parser');
const errorController = require('./controllers/error');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Error);

app.listen(3000);
