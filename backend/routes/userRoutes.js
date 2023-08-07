const express = require("express");
const userController = require("../controllers/userController");
const courseController = require("../controllers/courseController");
const cartController = require("../controllers/cartController");

const router = express.Router();

// ----------------- login route -----------------
router.post("/login", userController.loginUser);

// ----------------- signup route -----------------
router.post("/register", userController.signupUser);

// ----------------- forgot password route -----------------
router.post("/forgot-password", userController.forgotPassword);

// ----------------- reset password route -----------------
router.put("/reset-password/:resetToken", userController.resetPassword);

// ----------------- cart route -----------------
router
  .route("/cart")
  .get(cartController.getAllCart)
  .post(cartController.createCart);

router
  .route("/cart/:id")
  .get(cartController.getCart)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);
// ----------------- signup route -----------------
router.post("/token", userController.token);

// ----------------- courses route -----------------
router.route("/courses").get(courseController.getAllCourses);

router.route("/courses/:id").get(courseController.getCourse);

module.exports = router;
