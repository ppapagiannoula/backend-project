const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrders);

// router.get("/checkOut", shopController.getCheckOut);

router.post("/cartDeleteItem", shopController.postCartDeleteProduct);

//Test

module.exports = router;
