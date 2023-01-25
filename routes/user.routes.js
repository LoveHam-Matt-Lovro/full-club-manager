const express = require("express");
const router = express.Router({mergeParams: true});
// const router = express.Router();
const userController = require("./controllers/user.controller.js");



//Route for Login
router.get("/login", userController.getLoginForm)

//Route for Register
router.get("/register", userController.getRegisterForm)

//Route for Profile
router.get("/profile/:userId", userController.profileDetails)

//Route for editing and deleting profile
router.get("/profile/:userId/edit", userController.getEditProfile)
router.post("/profile/:userId/edit", userController.postEditProfile)
router.post("/profile/:userId/delete", userController.deleteUser)




//Route for list of all reviews
router.get("/",userController.listAllReviews)

//Routes for creating new  game
router.get("/create",userController.getCreateForm)  
router.post("/create",userController.postCreateForm)



//Routes for editing and deleting single review
router.get("/:reviewId/edit", userController.getEditForm)
router.post("/:reviewId/edit", userController.postEditForm)
router.post("/:reviewId/delete", userController.deleteReview)






// // POST /auth/signup  - Creates a new user in the database
// router.post("/signup", (req, res, next) => );
  
//   // POST  /auth/login - Verifies email and password and returns a JWT
//   router.post("/login", (req, res, next) =>
  
//   // GET  /auth/verify  -  Used to verify JWT stored on the client
//   router.get("/verify", isAuthenticated, 
  

  module.exports = router;
  