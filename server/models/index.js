const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost/puzzle", {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.Player = require("./players");
module.exports.Game = require("./game");
