const jwt = require("jsonwebtoken");
const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("you are not authentificated");

  const splitToken = token.split(" ")[1];

  jwt.verify(
    splitToken,
    process.env.ACCESS_TOKEN_SECRET_KEY,
    (err, payload) => {
      if (!err) {
        req.user = payload;
        return next();
      }
      return res.status(403).json("token is not valid");
    }
  );
};
module.exports = checkToken;
