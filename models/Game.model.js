const { Schema, model } = require("mongoose");



const gameSchema = new Schema(
  {
    league: {
      type: String,
      default:"AFLG"
    },
    round: {
      type: Number
    },
    opponent: {
      type: String,
      required: [true, "Opponent is required"]
    },
    venue: {
      type: String,
      required: [true, "Venue is required."],
    },
    startTime: {
      type: String,
      //required: [true, "Date is required."],

    },
    selection: [{ type: Schema.Types.ObjectId, ref: 'User' }],


    numberOfPlayers: {
      type: Number,
      default: 15,
      required: [true, "Please add number of players per team"]
    }
    ,
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }]
  },
  {
    timestamps: true,
  }
);

const Game = model("Game", gameSchema);

module.exports = Game;


