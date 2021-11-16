import { CommentOutlined, FavoriteBorder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "redux/apiCalls";
import Comment from "./Comment";

export default function CardFeed({ post }) {
  var [commentsActive, setCommentsActive] = useState(false);
  var [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const { currentUser } = useSelector((state) => state.user);
  const [userPost, setUserPost] = useState({});

  useEffect(() => {
    setLike(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);
  const handleLike = async () => {
    setLike((like = !like));
    setLikeCount(like ? likeCount + 1 : likeCount - 1);

    //like()
  };

  useEffect(() => {
    getUser(post.userId, setUserPost);
  }, [post.userId]);

  return (
    <div className="bg-white rounded-lg shadow-sm my-10 flex flex-col p-5">
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
            <p className="text-gray-400">2 hours ago</p>
          </div>
        </div>
        <div className="dropdown-card flex items-center relative">
          <span className="text-2xl">...</span>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col mt-2">
        <p className="mb-2 text-blue-900">{post.content}</p>
        {post.notePicture && (
          <img
            src={post.notePicture || ""}
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
          <button onClick={() => setCommentsActive(true)}>
            <CommentOutlined className="text-gray-500" fontSize="large" />
          </button>
        </div>
        <div className="flex flex-col">
          <button
            className="text-gray-400"
            onClick={() =>
              setCommentsActive((commentsActive = !commentsActive))
            }
          >
            Afficher les commentaires
          </button>
          {commentsActive && (
            <div className="flex">
              <div className="flex flex-col w-full">
                {/*Comment*/}
                {post.comments.map((comment, key) => (
                  <Comment item={comment} key={key} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
