const express = require("express");
const router = express.Router({ mergeParams: true });

const { createResults, getResults, getAll } = require("../handlers/game");

router.route("/:id").post(createResults);
router.route("/:id").get(getResults);

module.exports = router;
