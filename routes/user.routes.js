const express = require("express");
const router = express.Router({ mergeParams: true });
// const router = express.Router();
const userController = require("./controllers/userController.js");

//Route for Login
router.get("/login", userController.getLoginForm)

//Route for Register
router.get("/register", userController.getRegisterForm)

//Route for Profile
// router.get("/profile/:userId", userController.profileDetails)

//Route for editing and deleting profile

router.get("/test", (req, res, next) => {
    console.log("test")
    res.json({ message: "test" })
}
)

router.get("/test", (req, res, next) => {
    console.log("test")
    res.json({ message: "test" })
}
)

router.get("/:userId", userController.getUser)
router.put("/:userId", userController.editUser)
// router.delete("/profile/:userId", userController.deleteUser)

module.exports = router;
