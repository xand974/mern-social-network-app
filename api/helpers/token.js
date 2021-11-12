const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: "1d" }
  );
};

module.exports = { generateAccessToken };
