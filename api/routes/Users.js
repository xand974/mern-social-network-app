const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const checkToken = require("../middlewares/checkToken");

//#region get user
router.get("/one/:id", checkToken, async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const userFound = userId
      ? await User.findById(userId)
      : await User.findOne({ username });
    !userFound && res.status(404).send("aucun utilisateur trouvé");

    const { password, updatedAt, ...other } = userFound._doc;
    return res.status(200).send(other);
  } catch (err) {
    return res.status(500).send(err);
  }
});
//#endregion

//#region update user
router.put("/:id", checkToken, async (req, res) => {
  try {
    if (req.user.id !== req.params.id)
      return res
        .status(403)
        .json("vous ne pouvez pas update les infos d'un autre utilisateur");

    if (req.body.password) {
      const newSalt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, newSalt);
    }
    await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json("user has been updated");
  } catch (err) {
    return res.status(500).json(err);
  }
});
//#endregion

//#region delete user
router.delete("/:id", checkToken, async (req, res) => {
  try {
    if (req.user.id != id)
      return res
        .status(403)
        .json("vous ne pouvez pas supprimer qlq un d'autre");
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("user has been deleted");
  } catch (err) {
    return res.status(500).send(err);
  }
});
//#endregion

//#region follow user
router.put("/follow/:id", checkToken, async (req, res) => {
  try {
    if (req.user.id === req.params.id)
      return res.status(403).json("vous ne pouvez pas vous auto-suivre");

    const currentUser = await User.findById(req.user.id);
    const targetUser = await User.findById(req.params.id);
    if (
      !currentUser.following.includes(req.params.id) &&
      !targetUser.following.includes(req.user.id)
    ) {
      await currentUser.update({ $set: { following: req.params.id } });
      await targetUser.update({ $set: { following: req.user.id } });
      return res.status(200).json("vous suivez une nouvelle personne");
    }
    return res.status(403).json("vous suivez déjà cette personne");
  } catch (error) {
    res.status(500).json(error);
  }
});
//#endregion

//#region follow user
router.put("/unfollow/:id", checkToken, async (req, res) => {
  try {
    if (req.user.id === req.params.id)
      return res.status(403).json("vous ne pouvez pas vous auto-suivre");

    const currentUser = await User.findById(req.user.id);
    const targetUser = await User.findById(req.params.id);
    if (
      currentUser.following.includes(req.params.id) &&
      targetUser.following.includes(req.user.id)
    ) {
      await currentUser.update({ $pull: { following: req.params.id } });
      await targetUser.update({ $pull: { following: req.user.id } });
      return res.status(200).json("vous ne suivez plus une personne");
    }
    return res.status(403).json("vous suivez déjà cette personne");
  } catch (error) {
    res.status(500).json(error);
  }
});
//#endregion

//#region get user friend
router.get("/:id/friends", checkToken, async (req, res) => {
  try {
    const friendsUser = await User.findById(req.params.id);
    return res.status(200).send(friendsUser.following);
  } catch (err) {
    return res.status(500).json("something went wrong : " + err);
  }
});
//#endregion

module.exports = router;
