const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();
const checkToken = require("../middlewares/checkToken");

// #region create
router.post("/add", checkToken, async (req, res) => {
  try {
    const post = new Post(req.body);
    const newPost = await post.save();
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});
//#endregion

//#region get all user posts
router.get("/all/:id", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.id }).sort({
      createdAt: -1,
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//#endregion

// #region all current user posts
router.get("/all", checkToken, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
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
        return Post.find({ userId: friendId }).sort({ createdAt: 1 });
      })
    );
    const friendsAndUserPosts = userPosts.concat(...friendsPosts);
    const sorted = friendsAndUserPosts.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    return res.status(200).json(sorted);
  } catch (error) {
    return res.status(500).json("error" + error);
  }
});
//#endregion

router.put("/like/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json("post liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json("post disliked");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/comment/:postId", checkToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    await post.updateOne({
      $push: {
        comments: { comment: req.body.comment, userId: req.body.userId },
      },
    });
    return res.status(200).json("post commented");
  } catch (error) {
    return res.status(500).json(error);
  }
});

// #region update
router.put("/one/:id", checkToken, async (req, res) => {
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
