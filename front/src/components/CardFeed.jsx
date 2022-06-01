import { CommentOutlined, FavoriteBorder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addComment,
  getUser,
  like as likePost,
  removePost,
} from "redux/apiCalls";
import { like as likeRedux } from "redux/postSlice";
import { addCommentPost } from "redux/postSlice";
import Comment from "./Comment";
import Dropdown from "./Dropdown";
import Loading from "./Loading";

export default function CardFeed({ post }) {
  /*SELECTORS*/
  const { currentUser } = useSelector((state) => state.user);

  /*STATES*/
  const [commentsActive, setCommentsActive] = useState(false);
  const [like, setLike] = useState(post?.likes.includes(currentUser?._id));
  const [loading, setLoading] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes?.length ?? 0);
  const [userPost, setUserPost] = useState({});
  const [comment, setComment] = useState("");

  /*UTILS*/
  const date = new Date(post?.createdAt).toLocaleDateString("fr-FR");
  const dispatch = useDispatch();

  /*EFFECTS*/
  useEffect(() => {
    setLike(post?.likes.includes(currentUser?.user._id));
  }, [currentUser?.user._id, post?.likes]);

  useEffect(() => {
    getUser(post?.userId, setUserPost);
  }, [post?.userId]);

  /*FUNCTIONS*/
  const handleLike = async () => {
    try {
      setLike((prev) => (prev = !prev));

      dispatch(likeRedux({ id: post._id, userId: currentUser?.user._id }));
      setLikeCount((prev) => {
        return like ? prev - 1 : prev + 1;
      });
      await likePost(currentUser?.user._id, post?._id);
    } catch (error) {
      throw error;
    }
  };
  const handleComment = async () => {
    try {
      setLoading(true);
      await addComment(comment, post?._id, currentUser?.user._id, setComment);
      dispatch(
        addCommentPost({
          id: post?._id,
          comment: { comment: comment, userId: currentUser?.user._id },
        })
      );
      setComment("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const openDropdown = async (tag, setActive) => {
    switch (tag) {
      case "removePost":
        await deletePost();
        break;
      default:
        break;
    }
    setActive(false);
  };

  const deletePost = async () => {
    try {
      setLoading(true);
      await removePost(dispatch, post?._id, currentUser?.user?._id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const menusDropdown = [
    {
      tag: "removePost",
      text: "Remove Post",
    },
    {
      tag: "share",
      text: "Share Post",
    },
  ];

  const populateMenuDropdown = () => {
    return menusDropdown.filter((item) => {
      if (post?.userId !== currentUser?.user?._id)
        return item.tag !== "removePost";
      return item;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm my-10 flex flex-col p-5">
      <Loading loading={loading} />
      {/* header */}
      <div className="flex items-center">
        <div className="flex-1 flex items-center">
          <Link to={`/profile/${userPost?._id}`}>
            <img
              src={userPost?.profilePicture}
              alt=""
              className="h-10 w-10 rounded-lg object-cover mr-5"
            />
          </Link>
          <div className="">
            <p className="text-blue-400 font-semibold">{userPost?.username}</p>
            <p className="text-gray-400">{date}</p>
          </div>
        </div>
        <div className="dropdown-card flex items-center relative">
          <Dropdown
            menus={populateMenuDropdown()}
            handleDropdown={openDropdown}
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col mt-2">
        <p className="mb-2 text-blue-900">{post?.content}</p>
        {post?.notePicture && (
          <img
            src={post?.notePicture || ""}
            alt=""
            className="w-full h-96 object-cover rounded-lg"
          />
        )}
      </div>
      {/* footer */}
      <div className="flex flex-col">
        <div className="flex items-center border-b-2 border-gray-100">
          <button className="mr-5" onClick={handleLike}>
            <div className="flex items-center">
              <FavoriteBorder
                className={`${like ? "text-blue-500" : "text-gray-500"}`}
                fontSize="large"
              />
              <span className="text-gray-500">{likeCount}</span>
            </div>
          </button>
          <button
            className=""
            onClick={() => setCommentsActive((prev) => (prev = !prev))}
          >
            <CommentOutlined className="text-gray-500" fontSize="large" />
            <span className="text-gray-500 ml-1">{post?.comments?.length}</span>
          </button>
        </div>
        {commentsActive && (
          <form
            className="flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={comment}
              name="comment"
              className="border-b-2 p-2 w-full my-10 outline-none"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="p-2 border-2 border-blue-400 text-blue-400 rounded-lg"
              onClick={() => handleComment()}
            >
              commenter
            </button>
          </form>
        )}
        <div className="flex flex-col">
          <button
            className="text-gray-400"
            onClick={() => setCommentsActive((prev) => (prev = !prev))}
          >
            {!commentsActive
              ? "Afficher les commentaires"
              : "Masquer les commentaires"}
          </button>

          {commentsActive && (
            <div className="flex">
              <div className="flex flex-col w-full">
                {post?.comments?.map((comment, key) => (
                  <Comment item={comment} userPost={userPost} key={key} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
