const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
    reviewText: String,
  },
  {
    timestamps: true,
  }
);

const review = model("Review", reviewSchema);

module.exports = review;
