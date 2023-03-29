


exports.getAddProduct = (req,res,next) => {
    res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');

}

exports.postAddProduct =(req,res,next) => {
    //save to database
    res.redirect('/');
}

exports.getAllProducts = (req,res,next)=>{
    res.send(<h1>welcome to our eshop</h1>)
}

// exports.getProduct = (req,res,next) => {
//     res.send('<h1>this product</h1>');
// }