const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playername: {
    type: String,
    required: true,
    unique: true
  },
  games: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game"
    }
  ]
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
