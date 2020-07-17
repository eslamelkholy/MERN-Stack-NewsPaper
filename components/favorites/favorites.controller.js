const { User } = require("../../models");

const addUserFavorites = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.addFavorites(req.body.articleId);
  res.status(201).json({ message: "Article Added Successfully" });
};

const removeUserFavorites = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.removeFavorites(req.body.articleId);
  res.status(201).json({ message: "Article Removed Successfully" });
};

module.exports = {
  addUserFavorites,
  removeUserFavorites,
};
