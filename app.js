// const http = require('http');
const express = require('express');
const bodyParser =require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found! 404 error</h1>')
})

// app.use('/', (req, res, next) => {
//     console.log('this always runs');
//     next();
// });

// app.use('/add-product', (req, res, next) => {
//     console.log('in another middleware');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
// });

// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

// app.get('/product',(req,res,next)=>{
//     console.log('Product page');
//     res.send('<h1>product page</h1>')
// })

// app.use('/', (req, res, next) => {
//     console.log('in another middleware');
//     res.send('<h1>hello from express</h1>');
// });

// const server = http.createServer(app);

server.listen(3000);