const controller = require("./favorites.controller");
const express = require("express");
const router = express.Router();

router.post("/add", controller.addUserFavorites);
router.post("/remove", controller.removeUserFavorites);

module.exports = router;
