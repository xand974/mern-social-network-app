const jwt = require("jsonwebtoken");
const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  !token && res.status(401).json("you authentificated");

  const splitToken = token.split(" ")[1];

  jwt.verify(
    splitToken,
    process.env.ACCESS_TOKEN_SECRET_KEY,
    (err, payload) => {
      if (!err) {
        req.user = payload;
        next();
      } else {
        return res.status(403).json("token is not valid");
      }
    }
  );
};
module.exports = checkToken;
