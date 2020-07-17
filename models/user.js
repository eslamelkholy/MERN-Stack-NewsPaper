"use strict";
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          max: 200,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          max: 200,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email Address Already Exist",
        },
        validate: {
          isEmail: true,
          notEmpty: true,
          max: 200,
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    }
  );

  User.matchesPassword = (userPassword, hashedPassword) => {
    return bcrypt.compareSync(userPassword, hashedPassword);
  };

  User.associate = (models) => {
    models.User.belongsToMany(models.Article, { as: "Favorites", through: "UserFavorites" });
  };
  return User;
};
