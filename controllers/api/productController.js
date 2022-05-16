const { json } = require("express/lib/response");
const { Product, Categories } = require("../../database/models");

module.exports = {
  count: async (req, res) => {
    const products = await Product.findAll();
    const category = await Categories.findAll({
      include: ["productos"],
    });
    let newCategory = {};
    for (let i = 0; i < category.length; i++) {
      newCategory[category[i].category_name] = { products: category[i].productos.length };
    }
    console.log(newCategory);


    let productsArray = products.map((oneProduct) => {
      let producto = {
        id: oneProduct.dataValues.id,
        name: oneProduct.dataValues.product_name,
        description: oneProduct.dataValues.product_description,
        price: oneProduct.dataValues.product_price,
        image: `http://localhost:3001/uploads/products/${oneProduct.dataValues.product_image}`,
        detail: `http://localhost:3001/products/${oneProduct.dataValues.id}`,
      };
      return producto;
    });
    return res.status(200).json({
      count: products.length, 
      countByCategories: {
        categoryCount: newCategory
    },
      data: productsArray,
      status: 200,
    });
  },

  productDetail: async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    return res.status(200).json({
      data: product,
      imageUrl: "https://localhost:3001/public/uploads/products/${data.image}",
    });
  },

};
