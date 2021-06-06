const express = require("express");
const UserController = require("../controlllers/user");
const router = express.Router();

router.post("/signup", UserController.createUser );

router.post("/login", UserController.UserLogin);

module.exports = router;






// cart  