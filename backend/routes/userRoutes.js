const express = require("express");
const authenticateToken = require("../middlewares/authenticateToken");
const {
  register,
  login,
  getUser,
  loginViaOtp,
  generateOtp,
} = require("../controller/userController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/get-user").post(authenticateToken, getUser);
router.route("/send-otp/:email").get(generateOtp);
router.route("/verify-otp").post(loginViaOtp);

module.exports = router;
