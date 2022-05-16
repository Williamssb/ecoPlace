const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");

const { Product } = require("../database/models");
// const Product = require("../models/Product");

// const productFilePath = path.resolve(__dirname, "../data/DB-products.json");
// const products = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));

const productsController = {
  //Se despliega el detalle del producto
  displayProductDetail: async (req, res) => {
    const productData = await Product.findByPk(req.params.id);
    return res.render("products/product_detail", { productData });
  },

  //Se despliega la pantalla de creación de producto
  displayCreateProduct: (req, res) => {
    res.render("products/products_create");
  },

  //Se crea el producto
  createProduct: async (req, res) => {
    const resultValidation = validationResult(req);

    
    if(resultValidation.errors.length > 0){
      res.render("products/products_create", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      }); 
      console.log(req.body)
    } else {
      let newProduct = req.body;
    newProduct.product_image = req.file.filename;
    await Product.create(newProduct);
    res.redirect("/products");
    }
    },

  //Se despliega la edición del producto
  displayEditProduct: async (req, res) => {
    const productData = await Product.findByPk(req.params.id);
    return res.render("products/products_edit", { productData });
  },

  //Se actualiza un producto ya existente
  updateProductDetail: async (req, res) => {
    const resultValidation = validationResult(req);
    if(resultValidation.errors.length > 0){
      productData={id:req.params.id,...req.body}
      res.render("products/products_edit", {
        errors: resultValidation.mapped(),
        productData,
      });
    } else{
      await Product.update(
        {
          ...req.body,
          product_image: req.file ? req.file.filename : "default-img.jpg",
        },
        { where: { id: req.params.id } }
      );
  
      return res.redirect("/products");
    }
  },

  //Se despliega la lista completa de productos
  displayProductsList: async (req, res) => {
    products = await Product.findAll();
    return res.render("products/products", {
      productsList: products,
    });
  },
  
  // Se despliega la lista por categorias
  displayProductsCategories: async(req, res) => {

    const productsCategories = await Product.findAll({
       where: { category_id: req.params.id } });
    const categories = ["Flora y Jardín","Orgánicos","Cuidado personal" ,"Hogar"]
    const idCategories = req.params.id
    res.render("products/products_categories", {
      productsList: productsCategories,
      user: req.session.userLogged,
      categories: categories,
      idCategories : idCategories
    });
  },
  
  //Se borra el producto
  deleteProduct: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });

    return res.redirect("/products");
  }
};

module.exports = productsController;
