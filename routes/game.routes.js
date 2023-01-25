const express = require("express");
const router = express.Router();
const gameController = require("./controllers/game.controller.js");

//
//Route for list of all games
router.get("/",gameController.listAllGames)

//Routes for creating new  game
router.get("/create",gameController.getCreateForm)
router.post("/create",gameController.postCreateForm)

//Route for single game
router.get("/:gameId", gameController.gameDetails)

//Routes for editing and deleting single game
router.get("/:gameId/edit", gameController.getEditForm)
router.post("/:gameId/edit", gameController.postEditForm)
router.post("/:gameId/delete", gameController.deleteGame)



