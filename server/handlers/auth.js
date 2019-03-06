const db = require("../models");

exports.signup = async function(req, res, next) {
  try {
    console.log(req.body);
    let player = await db.Player.create(req.body);
    let { playername } = player;
    return res.status(200).json(playername);
  } catch (error) {
    if (error.code === 11000) {
      error.message = "Sorry , That name was already taken";
    }
    return next({
      status: 400,
      error: error.message
    });
  }
};

exports.signin = async function(req, res, next) {
  try {
    let player = await db.Player.findOne({
      playername: req.body.playername
    });
    return res.status(200).json(player);
  } catch (err) {
    return next({
      status: 400,
      message: "The Field Can't Be Empty"
    });
  }
};
