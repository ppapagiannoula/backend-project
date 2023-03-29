


exports.getAddProduct = (req,res,next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');

}

exports.postAddProduct =(req,res,next) => {
    //save to database
    //sotre product to database
    res.redirect('/');
}

exports.getAllProducts = (req,res,next)=>{
    res.send(<h1>welcome to our eshop</h1>)
    //fetch all products from database
}

// exports.getProduct = (req,res,next) => {
//     res.send('<h1>this product</h1>');
// }