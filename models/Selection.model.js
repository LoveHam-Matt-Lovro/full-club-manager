const { Schema, model } = require("mongoose");

const selectionSchema = new Schema(
  {
    forwards: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    defenders: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    midfielders: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const selection = model("Selection", selectionSchema);

module.exports = Selection;
