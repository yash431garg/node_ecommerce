const { Router } = require("express");
const path = require("path");
const express = require("express");
const router = express.Router();
// const adminData = require("./routes/admin");
const productController = require("../controllers/products");

router.get("/", productController.getProduct);
module.exports = router;
