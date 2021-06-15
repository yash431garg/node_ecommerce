// const adminData = require("../routes/admin");
// const products = [];
const Product = require("../models/products");
exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product");
};

exports.postAddProduct = (req, res, next) => {
  // req.body is not used because we are setting the cart in controller
  // products.push({ cart: req.body });
  const product = new Product(req.body.cart);

  product.save();

  res.redirect("/");
};
exports.getProduct = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // console.log(adminData.products);
  // res.render("shop", { prod: adminData.products });
  const products = Product.fetchAll();
  console.log(products);
  res.render("shop", { prod: products });
};
