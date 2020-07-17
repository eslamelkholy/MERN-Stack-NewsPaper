const ArticleService = require("./service/ArticleService");

exports.getAllArticles = async (req, res) => {
  const articles = await ArticleService.getAllArticles();
  return res.status(200).send({ articles });
};
