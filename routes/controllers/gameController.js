const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Game = require("../../models/Game.model.js");
const User = require("../../models/User.model.js");
const Review = require("../../models/Review.model.js");
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");

// listAllGames function
exports.listAllGames = (req, res, next) => {
  Game.find()
    .then((allGames) => res.json(allGames))
    .catch((err) => res.json(err));
};

exports.postCreateForm = (req, res, next) => {
  const newGame = req.body;
  console.log(newGame)
  Game.create(newGame)
    .then((newGame) => req.json(newGame))
    .catch((err) => res.json(err));
};

// gameDetails function
exports.gameDetails = (req, res, next) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Game ID is not valid" });
    return;
  }
  Game.findById(gameId).populate("attack").populate("midfield").populate("defense")
    .then((game) => res.status(200).json(game))
    .catch((err) => res.json(err));
};

// putEditForm function
exports.editGame = (req, res, next) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Game ID is not valid" });
    return;
  }
  Game.findByIdAndUpdate(gameId, req.body, { new: true })
    .then((updatedGame) => res.json(updatedGame))
    .catch((err) => res.json(err));
};

// deleteGame function
exports.deleteGame = (req, res, next) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Game ID is not valid" });
    return;
  }
  Game.findByIdAndRemove(gameId)
    .then(() =>
      res.json({ message: `Game with ID ${gameId} was successfully removed` })
    )
    .catch((err) => res.json(err));
};

exports.getSelection = (req, res, next) => {
  User.find()
    .then((allPlayers) => {
      return res.json(allPlayers);
    })
    .catch((err) => res.json(err));
};

exports.newReview = (req, res, next) => {
  const { gameId } = req.params;
  // const { review } = req.body;

  Review.create(req.body)
    .then((newReview) => {
      return Game.findByIdAndUpdate(
        gameId,
        { $push: { reviews: newReview._id } },
        { new: true }
      );
    })
    .then((updatedGame) => {
      return res.json(updatedGame);
    })
    .catch((err) => res.json(err));
};

exports.getReviews = (req, res, next) => {
  const { gameId } = req.params;
  Game.findById(gameId)
    .populate("reviews")
    .then((game) => res.json(game))
    .catch((err) => res.json(err));
};

//
