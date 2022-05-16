module.exports = (sequelize, DataTypes) => {
    let alias = "Carts";

    let cols = {
        cart_name:{
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "carts",
        timestamp: false 
    };

    const Carts = sequelize.define(alias, cols, config);

    Carts.associate = function(models) {
        Carts.belongsTo(models.Usuarios, {
            as: "usuarios",
            foreignKey: "users_id"
        });
    }

    return Carts;
}