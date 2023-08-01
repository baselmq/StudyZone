const express = require("express");
const { loginUser } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/", loginUser);

module.exports = router;
