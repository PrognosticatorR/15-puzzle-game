const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  time: {
    type: Number
  },
  shuffles: {
    type: Number
  }
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
