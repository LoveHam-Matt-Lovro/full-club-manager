const express = require("express");
const router = express.Router({ mergeParams: true });
// const router = express.Router();
const userController = require("./controllers/user.controller.js");

//Route for Login
router.get("/login", userController.getLoginForm)

//Route for Register
router.get("/register", userController.getRegisterForm)

//Route for Profile
router.get("/profile/:userId", userController.profileDetails)

//Route for editing and deleting profile
router.get("/profile/:userId", userController.getEditProfile)
router.post("/profile/:userId", userController.postEditProfile)
router.post("/profile/:userId", userController.deleteUser)


module.exports = router;
