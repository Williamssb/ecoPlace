const { Usuarios } = require("../database/models");
// const { Op } = require('sequelize');

const userLoggedMiddleware = async function(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;
  if(emailInCookie != undefined) {

  let userFromCookie = await Usuarios.findOne({ where: {user_email: emailInCookie}});
  
  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  } else {
    res.locals.userLogged = req.session.userLogged
  }

  next();
}

module.exports = userLoggedMiddleware;
