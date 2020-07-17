const controller = require("./favorites.controller");
const express = require("express");
const router = express.Router();
const { checkIfArticleExists } = require("./request/FavoritesMiddleware");

router.post("/add", checkIfArticleExists, controller.addUserFavorites);
router.post("/remove", checkIfArticleExists, controller.removeUserFavorites);

module.exports = router;
