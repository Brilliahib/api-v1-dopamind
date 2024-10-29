const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const authController = require("../controllers/authController");

const router = express.Router();

// Route untuk registrasi user baru
router.post("/register", authController.register);

// Route untuk login user
router.post("/login", authController.login);

router.post("/change-password", authController.changePassword);

module.exports = router;
