const express = require("express");
const router = express.Router();

const loggedInMiddleware = require("../middlewares/loggedInMiddleware");
const usersController = require("../controllers/usersController");
const uploadUserAvatar = require("../middlewares/multerUsersCreationMiddleware");
const validateUserCreation = require("../middlewares/validateUserRegisterMiddleware");
const validateUserLogin = require("../middlewares/validateUserLoginMiddleware");
// const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

router.get("/sign_in", loggedInMiddleware, usersController.signIn);

router.get("/sign_up", loggedInMiddleware, usersController.signUp);

router.get("/profile", guestMiddleware, /*userLoggedMiddleware,*/ usersController.displayProfile);

router.post(
  "/sign_up",
  uploadUserAvatar.single("user_image"),
  validateUserCreation,
  usersController.createUser
);

router.post("/sign_in", validateUserLogin, usersController.loginProcess);

router.get("/shopping_cart", usersController.cart);

router.get("/logOut", usersController.logOut);

module.exports = router;
