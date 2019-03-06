const db = require("../models/index");

exports.createResults = async function(req, res, next) {
  try {
    let game = await db.Game.create({
      time: req.body.time,
      shuffles: req.body.shuffles
    });
    let foundPlayer = await db.Player.findById(req.params.id);
    foundPlayer.games.push(game.id);
    let foundGame = await db.Game.findById(game.id).populate("player", {
      playername: true
    });
    await foundPlayer.save();
    return res.status(200).json(foundGame);
  } catch (error) {
    return next(error);
  }
};

exports.getResults = async function(req, res, next) {
  try {
    let player = await db.Player.findById(req.params.id);
    let playerId = player._id;
    let results = await db.Game.find().sort({ time: 1 });
    return res.status(200).json(results);
  } catch (error) {
    return next(error);
  }
};
