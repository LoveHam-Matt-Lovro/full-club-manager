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

    text: {
      type: String,
      required: [true, "Review is required."],

    }
  },
  {
    timestamps: true,
  }
);

const review = model("Review", reviewSchema);

module.exports = review;
