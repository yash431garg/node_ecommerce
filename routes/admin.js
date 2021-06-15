const { Router } = require("express");
const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");
const productController = require("../controllers/products");
// console.log(productController);

router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.postAddProduct);
module.exports = router;
// trying to export more than two things
// exports.products = products;
// exports.routes = router;
