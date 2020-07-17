const controller = require("./favorites.controller");
const express = require("express");
const router = express.Router();

router.get("/add", controller.addFavorites);
router.post("/remove", controller.removeFavorites);

module.exports = router;
