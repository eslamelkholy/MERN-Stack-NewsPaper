const AuthMiddleware = require("../middlewares/AuthMiddleware");

module.exports = (app) => {
  app.use("/api/user", require("./user/user.routes"));
  app.use("/api/article", AuthMiddleware, require("./article/article.routes"));
  app.use("/api/favorites", AuthMiddleware, require("./favorites/favorites.routes"));
};
