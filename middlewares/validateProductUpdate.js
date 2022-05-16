const { body } = require("express-validator");
const path = require("path")

const validateProductUpdate = [
  body("product_name")
  .notEmpty()
  .withMessage("*Rellena el campo de nombre del producto")
  .bail()
  .isLength({ min: 5, max: 20 })
  .withMessage(
    "El nombre del producto debe contener mínimo 5 caracteres y máximo 20 caracteres"
  ),
  body("product_price")
  .notEmpty()
  .withMessage("*Rellena el campo del precio del producto")
  .bail()
  .isDecimal()
  .withMessage("*Completar el campo unicamente con numeros."),
  body("product_description")
  .notEmpty()
  .withMessage("*Rellena el campo de descripción del producto")
  .bail()
  .isLength({ min: 20, max: 1000 })
  .withMessage(
    "El nombre de la descripción debe contener mínimo 20 caracteres y máximo 100 caracteres"
  ),
  body("product_image").custom((value, { req }) => {
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
  })
];


module.exports = validateProductUpdate;