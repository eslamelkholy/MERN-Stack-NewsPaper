const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(400).json({ message: "No Token, Authorization Denied! " });
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Token is Not Valid" });
  }
};

module.exports = auth;
