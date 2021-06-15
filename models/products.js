const products = [];

module.exports = class Product {
  constructor(c) {
    this.cart = c;
    console.log(c);
  }
  save() {
    products.push(this.cart);
    console.log(this);
    // console.log(products);
  }
  static fetchAll() {
    // return this.porducts;
    return products;
    console.log(products);
  }
};
