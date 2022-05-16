//Se importan librerúas
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//Se require el modelo de usuarios
const { Usuarios } = require("../database/models");
const { userInfo } = require("os");
// const { cookie } = require("express/lib/response");

const usersController = {
  displayProfile: (req, res) => {
    res.render("users/profile");
  },

  signIn: (req, res) => {
    res.render("users/sign_in");
  },

  signUp: (req, res) => {
    res.render("users/sign_up");
  },

  logOut: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  cart: (req, res) => {
    res.render("users/shopping_cart");
  },

  // Creacion del usuario por la ruta POST
  createUser: async (req, res) => {
    const resultValidation = validationResult(req);

    //Valida si pasan errores de validacion en la creacion del usuario
    if (resultValidation.errors.length > 0) {
      res.render("users/sign_up", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      let newUser = req.body;

      // Valida que el email no esté en uso
      let userInDB = await Usuarios.findOne({
        where: { user_email: newUser.user_email },
      }).catch((error) => console.log(error));

      if (userInDB) {
        return res.render("users/sign_up", {
          errors: {
            user_email: { msg: "*Este email ya está en uso" },
          },
          oldData: req.body,
        });
      }

      //Valida que la password coincida con la confirmación de password
      if (newUser.user_password == newUser.confirmSignUpPassword) {
        delete newUser.confirmSignUpPassword;
        newUser.user_image = req.file.filename;
        newUser.user_password = bcrypt.hashSync(req.body.user_password, 10);
        Usuarios.create(newUser);
        delete newUser.user_password;
        req.session.userLogged = newUser;

        res.redirect("/profile");
      } else {
        res.render("users/sign_up", {
          errors: {
            password: { msg: "*Las contraseñas no coinciden" },
            confirmSignUpPassword: { msg: "*Las contraseñas no coinciden" },
          },
          oldData: newUser,
        });
      }
    }
  },

  loginProcess: async (req, res) => {
    const resultValidation = validationResult(req);

    //Valida si pasan errores de validacion en la creacion del usuario
    if (resultValidation.errors.length > 0) {
      res.render("users/sign_in", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      let userToLogin = await Usuarios.findOne({
        where: { user_email: req.body.user_email },
      }).catch((error) => console.log(error));

      if (userToLogin) {
        let isOKPassword = bcrypt.compareSync(
          req.body.user_password,
          userToLogin.user_password
        );

        if (isOKPassword) {
          delete userToLogin.user_password;
          req.session.userLogged = userToLogin;

          if (req.body.rememberUser) {
            res.cookie("userEmail", req.body.user_email, {
              maxAge: 1000 * 60 * 10,
            });
          } else {
            res.locals.userLogged = req.session.userLogged;
          }

          res.redirect("/");
        } else {
          res.render("users/sign_in", {
            errors: {
              user_email: {
                msg: "*Favor validar las credenciales",
              },
            },
            oldData: req.body,
          });
        }

        console.log(req.body.user_password);
      } else {
        res.render("users/sign_in", {
          errors: {
            user_email: {
              msg: "*Favor validar las credenciales",
            },
          },
          oldData: req.body,
        });
      }
    }
  },
};

module.exports = usersController;
