const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/auth");
const errorHandler = require("./handlers/error");
const gameRoutes = require("./routes/players");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 8080 || process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/game", gameRoutes);

app.get("/api/game", async function(req, res, next) {
  try {
    let player = await db.Player.find().populate({
      path: "games",
      options: { sort: { time: 1 } }
    });

    return res.status(200).json(player);
  } catch (error) {
    return next(error);
  }
});

app.use(function(req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT}`);
});
