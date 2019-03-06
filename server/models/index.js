const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost/puzzle", {
  keepAlive: true,
  useNewUrlParser: true
});
// (async function connectDB() {
//   try {
//     console.log(db);
//     await mongoose
//       .connect(db, {
//         keepAlive: true,
//         useNewUrlParser: true
//       })
//       .then(() => {
//         console.log("DB CONNECTED SUCCESSFULLY");
//       });
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

module.exports.Player = require("./players");
module.exports.Game = require("./game");
