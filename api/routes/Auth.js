const router = require("express").Router();
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../helpers/token");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName, username } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(401).json("vous avez déjà un compte");

    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);
    var user = new User({
      email,
      password: newPass,
      fullName,
      username,
    });

    const newUser = await user.save();

    return res.status(200).json(newUser._doc);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json("cannot login");

    const isMatched = await bcrypt.compare(
      req.body.password,
      userFound.password
    );
    if (!isMatched)
      return res.status(401).json("mot de passe ou identifiant incorrecte");
    const { password, ...rest } = userFound._doc;
    const accessToken = generateAccessToken(userFound);
    return res.status(200).json({ user: rest, accessToken });
  } catch (err) {
    return res.status(500).json("err" + err);
  }
});

router.post("/check-auth", (req, res) => {
  try {
    const tokenFromHeader = req.headers.authorization;
    if (!tokenFromHeader)
      return res.status(401).json("you are not authentificated");
    const token = tokenFromHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, payload) => {
      if (err) return res.status(403).json("token is not valid");

      req.user = payload;
      return res.status(200).json({ data: "success" });
    });
  } catch (error) {
    return res.status(500).json(err);
  }
});

module.exports = router;
