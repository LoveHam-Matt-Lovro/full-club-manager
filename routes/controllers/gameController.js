const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Game = require("../../models/Game.model.js");
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");


// listAllGames function
exports.listAllGames = (req, res, next) => {
  console.log("lsit all games");

  Game.find()
    .then((allGames) => res.json(allGames))
    .catch((err) => res.json(err));
};


// getCreateForm function
exports.getCreateForm = (req, res, next) => {
  console.log("get create Form");


};


// postCreateForm function !!! not fucntionning
exports.postCreateForm =(req, res, next) => {
//   // console.log("post create Form");
// const newGame = req.body;
// console.log( newGame);
 

// Game.create(newGame)
//       .then((newGame) => req.json(newGame))
//       .catch((err) => res.json(err))
    };


// gameDetails function
exports.gameDetails = (req, res, next) => {
  console.log("gameDetails");

  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Game ID is not valid" });
    return;
  }
  Game.findById(gameId)
    .then((game) => res.status(200).json(game))
    .catch((err) => res.json(err));
};


// putEditForm function
exports.putEditForm = (req, res, next) => {
  console.log("postEditForm");

  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Game ID is not valid" });
    return;
  }
  Game.findByIdAndUpdate(gameId, req.body, { new:true })
    .then((updatedGame) =>
      res.json(updatedGame)
    )
    .catch((err) => res.json(err));
};


// deleteGame function
exports.deleteGame = (req, res, next) => {
  console.log("deleteGame");

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
