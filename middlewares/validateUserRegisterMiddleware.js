const { body } = require("express-validator");
const path = require("path");
const validateUserCreation = [
  body("user_name")
    .notEmpty()
    .withMessage("*Rellena el campo de nombre de usuario")
    .bail()
    .isLength({ min: 5, max: 20 })
    .withMessage(
      "El nombre de usuario debe contener mínimo 5 caracteres y máximo 20 caracteres"
    ),
  body("user_email")
    .notEmpty()
    .withMessage("*Rellena el campo del email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("user_password")
    .notEmpty()
    .withMessage("*Rellena el campo de contraseña")
    .bail()
    .isLength({ min: 8, max: 20 })
    .withMessage(
      "La contraseña debe contener mínimo 4 caracteres y máximo 20 caracteres"
    ),
  body("confirmSignUpPassword")
    .notEmpty()
    .withMessage("*Rellena el campo de la contraseña nuevamente")
    .bail()
    .isLength({ min: 8, max: 20 })
    .withMessage(
      "La contraseña debe contener mínimo 4 caracteres y máximo 20 caracteres"
    ),
  body("user_image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".PNG", ".jpeg", ".gif"];
    if (!file) {
      throw new Error("*Se debe subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `*Las extensiones de archivo son: ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];
module.exports = validateUserCreation;