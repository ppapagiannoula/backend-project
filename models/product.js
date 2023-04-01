const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent)=>{
        if (err){
            cb([]); //show the error
        }else{
            cb(JSON.parse(fileContent)); //read json elements
        }
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() { //array->push, products-->to json
        this.id = Math.random().toString(); //stin mongodb tha ginei aftomata
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}

