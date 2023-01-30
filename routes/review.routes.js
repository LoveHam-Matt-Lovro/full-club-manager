const express = require("express");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const router = express.Router({ mergeParams: true });
// const router = express.Router();
const reviewController = require("./controllers/review.controller.js");
//

const isCoach = (req, res, next) => {
    if (User.role === "coach") {
        //display
    } else {
        // display only:
        // Review.author.role === coach || review.author._ID = logged in user
    }

}

//Route for list of all reviews
router.get("/", reviewController.listReviews)

// //Routes for creating new  game
// router.post("/", isAuthenticated, reviewController.postCreateForm)


//Routes for editing and deleting single review
router.put("/:reviewId", isAuthenticated, reviewController.postEditForm)
router.delete("/:reviewId", isAuthenticated, reviewController.deleteReview)



module.exports = router;