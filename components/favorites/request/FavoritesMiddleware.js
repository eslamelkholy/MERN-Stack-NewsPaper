const { Article } = require("../../../models");

const checkIfArticleExists = async (req, res, next) => {
  const article = await Article.findByPk(req.body.articleId);
  if (!article) return res.status(400).json({ message: "Article Not Found!!" });
  next();
};

module.exports = {
  checkIfArticleExists,
};
