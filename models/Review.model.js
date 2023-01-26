const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    gameId: {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
    coachReview: String,
    playerReview: String,
    ourScore: Number,
    opponentScore: Number
  },
  {
    timestamps: true,
  }
);

const review = model("Review", reviewSchema);

module.exports = review;
