const { User } = require("../../models");

exports.addUserFavorites = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.addFavorites(req.body.articleId);
  const userFavorites = await user.getFavorites({ attributes: ["id"] });
  res.status(201).json({ message: "Article Added Successfully", userFavorites });
};

exports.removeUserFavorites = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.removeFavorites(req.body.articleId);
  res.status(201).json({ message: "Article Removed Successfully" });
};
