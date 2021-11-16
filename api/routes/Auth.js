const router = require("express").Router();
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../helpers/token");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName, username } = req.body;
    const userFound = await User.findOne({ email });
    userFound && res.status(401).json("vous avez déjà un compte");

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
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    const isMatched = await bcrypt.compare(password, userFound.password);
    if (isMatched) {
      const accessToken = generateAccessToken(userFound);
      res.status(200).json({ user: userFound, accessToken });
    } else {
      res.status(401).json("mot de passe ou identifiant incorrecte");
    }
  } catch (err) {
    res.status(500).json("err" + err);
  }
});

module.exports = router;
