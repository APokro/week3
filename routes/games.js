     // routes/games.js
     const gamesRouter = require("express").Router(); // Создали роутер
     const { 
          getAllGames,
          checkIsTitleInArray,
          updateGamesArray,
          updateGamesFile,
          findGameById,
          deleteGame, 
          } = require("../middlewares/games");
     const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
     
     // Получим игры из JSON-файла и отправим в ответ на запрос
     
     gamesRouter.get("/games", getAllGames, sendAllGames);
     gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdatedGames);
     gamesRouter.post("/games", getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, sendUpdatedGames);
     
     module.exports = gamesRouter;
     