module.exports = (sequelize, DataTypes) => {
    let alias = "Categories";

    let cols = {
        category_name:{
            type: DataTypes.STRING
        },
    };
    let config = {
        tableName: "categories",
        underscored: true,
        timestamps: true,
    }

    const Categories = sequelize.define(alias, cols, config);

    Categories.associate = function(models) {
        Categories.hasMany(models.Product, {
            as: "productos",
            foreignKey: "category_id"
        });
    }

    return Categories;
}