const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();
const checkToken = require("../middlewares/checkToken");

// #region create
router.post("/add", checkToken, async (req, res) => {
  try {
    const post = new Post(req.body);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion

// #region all posts
router.get("/all", checkToken, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id });
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});
//#endregion

// #region friends + user posts

router.get("/feed", checkToken, async (req, res) => {
  try {
    const userPosts = await Post.find({ userId: req.user.id });
    const user = await User.findById(req.user.id);
    const friendsPosts = await Promise.all(
      user.friends.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion

// #region update
router.put("/:id", checkToken, async (req, res) => {
  try {
    if (req.body.id === req.user.id) {
      await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json("post updated");
    }
    return res
      .status(401)
      .json(
        "vous ne pouvez pas mettre à jour les posts d'un autre utilisateur"
      );
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion

// #region delete
router.delete("/:id", checkToken, async (req, res) => {
  try {
    if (req.body.id === req.user.id) {
      await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json("post deleted");
    }
    return res
      .status(401)
      .json("vous ne pouvez pas supprimer les posts d'un autre utilisateur");
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion
module.exports = router;
