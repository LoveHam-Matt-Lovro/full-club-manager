const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    firstName: {
      type: String,
      required: [true, "Name is required."],
    },
    lastName: {
      type: String,

    },
    team: String,
    status: {
      type: String,
      default: "available",
    },
    dateOfBirth: String,
    nationality: {
      type: String,


    },
    role: String,
    kickingStat: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    handballingStat: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    speedStat: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    markingStat: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    tacklingStat: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    aboutMe: {
      type: String
    },
    favouriteAFLTeam: {
      type: String,
      enum: ["Adelaide Crows", "Brisbane Lions", "Carlton Blues", "Collingwood Magpies", "Essendon Bombers", "Fremantle Dockers", "Geelong Cats", "Gold Coast Suns", "Greater Western Sydney Giants", "Hawthown Hawks", "Melbourne Demons", "North Melbourne Kangaroos", "Port Adelaide Power", "Richmond Tigers", "St.Kilda Saints", "Sydney Swans", "West Coast Eagles", "Western Bulldogs"]
    },
    favouriteFootballMemory: String
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
