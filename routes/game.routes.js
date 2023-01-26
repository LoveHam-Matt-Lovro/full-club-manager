const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController.js");
const Game = require("../models/Game.model.js")
//
//Route for list of all games
router.get("/",gameController.listAllGames)

//Routes for creating new  game

router.get("/create", gameController.getCreateForm)
// router.post("/create", gameController.postCreateForm)


router.post("/create",(req, res, next) => {
    const newGame = req.body;
  console.log( newGame);  
  Game.create(newGame)
        .then((newGame) => req.json(newGame))
        .catch((err) => res.json(err))}
    )



//Route for single game
router.get("/:gameId", gameController.gameDetails)

//Routes for editing and deleting single game
router.get("/:gameId/edit", gameController.getEditForm)
router.put("/:gameId/edit", gameController.putEditForm)
router.delete("/:gameId/delete", gameController.deleteGame)

module.exports = router;

