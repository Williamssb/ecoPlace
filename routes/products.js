const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const uploadProductImage = require("../middlewares/multerProductCreationMiddleware");
const validateProductCreate = require("../middlewares/validateProductCreate");
const validateProductUpdate = require("../middlewares/validateProductUpdate");
const guestMiddleware = require("../middlewares/guestMiddleware");

router.get("/products", productsController.displayProductsList);
router.get(
  "/products/categories/:id",
  productsController.displayProductsCategories
);
router.get(
  "/products/create",
  guestMiddleware,
  productsController.displayCreateProduct
);
router.get("/products/:id", productsController.displayProductDetail);
router.delete("/products/:id", productsController.deleteProduct);
router.get(
  "/products/:id/edit",
  guestMiddleware,
  productsController.displayEditProduct
);
router.post(
  "/products",
  uploadProductImage.single("product_image"),
  validateProductCreate,
  productsController.createProduct
);
router.put(
  "/products/:id",
  uploadProductImage.single("product_image"),
  validateProductUpdate,
  productsController.updateProductDetail
);

module.exports = router;
