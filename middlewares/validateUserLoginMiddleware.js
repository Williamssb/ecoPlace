const { body } = require("express-validator");

const validateUserLogin = [
  body("user_email")
    .notEmpty()
    .withMessage("*Rellena el campo del email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
    body("user_password")
    .notEmpty()
    .withMessage("*Rellena el campo de contraseña")
];

module.exports = validateUserLogin;
