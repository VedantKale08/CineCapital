const express = require("express");
const authenticateToken = require("../middlewares/authenticateToken");
const {
  register,
  login,
  getUser,
  loginViaOtp,
  generateOtp,
  fetchInterests,
  updateInterests,
} = require("../controller/userController");

const router = express.Router();

router.route("/register").post(register);
// router.route("/login").post(login);
router.route("/get-user").get(authenticateToken, getUser);
router.route("/send-otp/:mobileNo").get(generateOtp);
router.route("/verify-otp").post(loginViaOtp);
router.route("/get-interests").get(authenticateToken, fetchInterests);
router.route("/update-interests").post(authenticateToken, updateInterests);

module.exports = router;
