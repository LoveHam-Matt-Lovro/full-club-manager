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
      required: [true, "Name is required."],
    },
    team: String,
    status: {
      type: String,
      default: "available" 
    },
    dateOfBirth: Date(),
    nationality: {
    type: String,
    required:[true,  "Nationality required"],
    default: "Australian"
    }
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;


