import {
  CommentOutlined,
  FavoriteBorder,
  FavoriteOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";

export default function CardFeed({ post }) {
  var [commentsActive, setCommentsActive] = useState(false);
  var [like, setLike] = useState(false);
  const handleLike = () => {
    setLike((like = !like));
  };
  return (
    <div className="bg-white rounded-lg shadow-sm my-10 flex flex-col p-5">
      {/* header */}
      <div className="flex items-center">
        <div className="flex-1 flex items-center">
          <Link to={`/profile/${post.userId}`}>
            <img
              src="https://images.unsplash.com/photo-1636908681421-bff3b85f7303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="h-10 w-10 rounded-lg object-cover mr-5"
            />
          </Link>
          <div className="">
            <p className="text-blue-400 font-semibold">Alexandre Malet</p>
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
        <img
          src={post.notePicture || ""}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      {/* footer */}
      <div className="flex flex-col">
        <div className="flex items-center border-b-2 border-gray-100">
          <button className="mr-5" onClick={handleLike}>
            {like ? (
              <FavoriteOutlined className="text-blue-500" fontSize="large" />
            ) : (
              <FavoriteBorder className="text-gray-500" fontSize="large" />
            )}
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
