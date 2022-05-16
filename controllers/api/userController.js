const { Usuarios } = require("../../database/models");

module.exports = {
show: async (req,res) => {
  const users = await Usuarios.findAll();
      let usersArray = users.map(oneUser =>{
      let usuario = {
              id: oneUser.dataValues.id,
              userName: oneUser.dataValues.user_name,
              email: oneUser.dataValues.user_email
          }
          return usuario
      })
  return res.status(200).json({
      total: users.length,
      users: usersArray,
      status: 200
  })},
  
  detail: async (req, res) => {
    const user = await Usuarios.findByPk(req.params.id);
    delete user.dataValues.user_password;
    return res.status(200).json({
      data: user,
      imageURL: `https://localhost:3001/public/uploads/users/${user.dataValues.user_image}`,
    });
  },
};
