const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const checkToken = require("../middlewares/checkToken");

//#region get user
router.get("/one", checkToken, async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const userFound = userId
      ? await User.findById(userId)
      : await User.findOne({ username });
    if (!userFound) return res.status(404).send("aucun utilisateur trouvé");

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
    if (req.user.id != req.params.id)
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
      !currentUser?.friends.includes(req.params.id) &&
      !targetUser.friends.includes(req.user.id)
    ) {
      await currentUser?.update({ $push: { friends: req.params.id } });
      await targetUser.update({ $push: { friends: req.user.id } });
      return res.status(200).json("vous suivez une nouvelle personne");
    }
    return res.status(403).json("vous suivez déjà cette personne");
  } catch (error) {
    return res.status(500).json(error);
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
      currentUser?.friends.includes(req.params.id) &&
      targetUser.friends.includes(req.user.id)
    ) {
      await currentUser?.update({ $pull: { friends: req.params.id } });
      await targetUser.update({ $pull: { friends: req.user.id } });
      return res.status(200).json("vous ne suivez plus une personne");
    }
    return res.status(403).json("vous suivez déjà cette personne");
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion

//#region get user friend
router.get("/:id/friends", checkToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).send(user.friends);
  } catch (err) {
    return res.status(500).json("something went wrong : " + err);
  }
});
//#endregion

//#region search users
router.get("/search", checkToken, async (req, res) => {
  try {
    const searchQuery = req.query.search_query;
    const users = await User.find({ $text: { $search: searchQuery } });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion

module.exports = router;
