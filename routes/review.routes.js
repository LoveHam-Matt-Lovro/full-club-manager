const express = require("express");
const router = express.Router({mergeParams: true});
// const router = express.Router();
const reviewController = require("./controllers/review.controller.js");
//

const isCoach = (req,res,next) => {
if (User.role === "coach") {
    //display
}else {
    // display only:
    // Review.author.role === coach || review.author._ID = logged in user
}

}

//Route for list of all reviews
router.get("/", reviewController.listReviews)

//Routes for creating new  game
router.post("/create", reviewController.postCreateForm)



//Routes for editing and deleting single review
router.put("/:reviewId/edit", reviewController.postEditForm)
router.delete("/:reviewId/delete", reviewController.deleteReview)



module.exports = router;