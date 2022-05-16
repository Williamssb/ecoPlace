const fs = require("fs");
const path = require("path");

const Product = {
  fileName: String(path.resolve(__dirname, "../data/DB-products.json")),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  generateId: function () {
    let allProducts = this.findAll();
    let lastProduct = allProducts.pop();
    return lastProduct ? lastProduct.id + 1 : 1;
  },

  findAll: function () {
    return this.getData();
  },

  findByPk: function (id) {
    let allProducts = this.findAll();
    let productFound = allProducts.find((oneProduct) => oneProduct.id == id);
    return productFound;
  },

  findByField: function (field, text) {
    let allProducts = this.findAll();
    let productFound = allProducts.find(
      (oneProduct) => oneProduct[field] === text
    );
    return productFound;
  },

  createProduct: function (productData) {
    let allProducts = this.findAll();
    let newproduct = {
      id: this.generateId(),
      ...productData,
    };
    allProducts.push(newproduct);
    fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, " "));
    return newproduct;
  },

  updateProduct: function (id, reqBody, reqFile) {
    // const products = this.findAll();
    // console.log(typeof reqFile);
    // const productsArrayEdited = products.map((oneProduct) => {
    //   if (oneProduct.id == id) {
    //     return {
    //       id: id,
    //       ...reqBody,
    //       image: reqFile == 0 ? oneProduct.image : reqFile,
    //     };
    //   }
    //   return oneProduct;
    // });
    // fs.writeFileSync(fileName, JSON.stringify(productsArrayEdited, null, " "));
  },

  deleteProduct: function (id) {
    let allProducts = this.findAll();
    let finalProducts = allProducts.filter((oneProduct) => oneProduct.id != id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, " "));
  },
};

module.exports = Product;