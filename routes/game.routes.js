const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController.js");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Game = require("../models/Game.model.js")
//
//Route for list of all games
router.get("/", gameController.listAllGames)

//Routes for creating new  game
router.post("/", isAuthenticated, gameController.postCreateForm)

//Route for single game
router.get("/:gameId", gameController.gameDetails)

//Routes for editing and deleting single game
router.put("/:gameId", isAuthenticated, gameController.putEditForm)
router.delete("/:gameId", gameController.deleteGame)

module.exports = router;

