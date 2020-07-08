'use strict'
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      content: DataTypes.TEXT,
      urlToImage: DataTypes.TEXT,
      url: DataTypes.TEXT,
    });
    
    Article.associate = (models) => {
      models.Article.belongsToMany(models.User, { as: 'Users', through: 'UserFavorites'});
    };
    return Article;
  };