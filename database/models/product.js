module.exports = (sequelize, DataTypes) => {
  
    let alias = "Product";
    let cols = {
      product_name:{
        type: DataTypes.STRING
      },
      product_description:{
        type: DataTypes.STRING
      },
      product_technical_description:{
        type: DataTypes.STRING
      },
      product_other_description:{
        type: DataTypes.STRING
      },
      category_id:{
        type: DataTypes.INTEGER
      },
      product_price:{
        type: DataTypes.FLOAT
      },
      product_image:{
        type: DataTypes.STRING  
      }
    }
    let config = {
      tableName: "products",
      underscored: true,
      timestamps: true,
      paranoid: true,
    };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function(models) {
    Product.belongsTo(models.Categories, {
      as: "categoria",
      foreignKey: "category_id"
    });
  }

  return Product;
};
