const jwt = require('jsonwebtoken')

module.exports = {
  generateAccessToken: (user) =>{
    return jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 36000 });
  }
}