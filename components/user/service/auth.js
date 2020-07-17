const jwt = require("jsonwebtoken");
const { User } = require("../../../models");

module.exports = {
  generateAccessToken: (user) => {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 36000 });
  },
  findUserByEmail: (email) => User.findOne({ where: { email } }),
  createUser: (req) => User.create(req.body),
  matchesPassword: (password, hashedPassword) => User.matchesPassword(password, hashedPassword),
  findAllUsers: () => User.findAll(),
};
