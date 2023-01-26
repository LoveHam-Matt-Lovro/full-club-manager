const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../../models/Review.model.js")
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");

// needs to be reviews for a specific game, so we might need to populate games?
exports.listReviews=(req,res,next) => {
    console.log("list of all reviews for that game")
    Review.find()
    .then((allReviews) => res.json(allReviews))
    .catch((err) => res.json(err));

    
}


exports.postCreateForm=(req,res,next) => {
    console.log("postCreateForm")
    const gameId = req.params.id

    
        const newReview = {...req.body, gameId};
      console.log( newReview);  
      Review.create(newReview)
            .then((newReview) => req.json(newReview))
            .catch((err) => res.json(err))}
        



exports.postEditForm=(req,res,next) => {
    console.log("postEditForm")

    const { reviewId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      res.status(400).json({ message: "Review ID is not valid" });
      return;
    }
    Review.findByIdAndUpdate(reviewId, req.body, { new:true })
      .then((updatedReview) =>
        res.json(updatedReview)
      )
      .catch((err) => res.json(err));
}

exports.deleteReview=(req,res,next) => {
    console.log("deleteReview")
    const { reviewId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      res.status(400).json({ message: "Review ID is not valid" });
      return;
    }
    Review.findByIdAndRemove(reviewId)
      .then(() =>
        res.json({ message: `Game with ID ${reviewId} was successfully removed` })
      )
      .catch((err) => res.json(err));
  };
