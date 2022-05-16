module.exports = (sequelize, DataTypes) => {
  let alias = "Usuarios";

  let cols = {
    user_name: {
      type: DataTypes.STRING,
    },
    user_email: {
      type: DataTypes.STRING,
    },
    user_password: {
      type: DataTypes.STRING,
    },
    user_image: {
      type: DataTypes.STRING,
    },
  };
  let config = {
    tableName: "users",
    timestamp: false,
  };

  const Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models){
      Usuarios.belongsTo(models.Carts, {
        as: "carrito",
        foreignKey: "id"
      });
    }

  return Usuarios;
};
