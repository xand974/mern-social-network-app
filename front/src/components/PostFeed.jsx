import { AutoAwesomeOutlined, ImageOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "redux/apiCalls";

export default function PostFeed() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState();

  const handleClick = () => {
    createPost({ content: newPost, userId: currentUser.user._id }, dispatch);
    setNewPost("");
  };

  return (
    <div className="bg-white shadow-lg p-5 flex items-center rounded-lg mb-11">
      <img
        src="https://images.unsplash.com/photo-1636912305077-eb89d5ede5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        alt="photoURL of the user"
        className="w-16 h-10 rounded-lg object-cover mr-5"
      />

      <form
        className="flex items-center w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={`Quoi de neuf, ${currentUser?.user.username} ?`}
          className="w-full flex-1 outline-none placeholder-gray-500 "
          onChange={(e) => setNewPost(e.target.value)}
        />

        <div className="mx-2">
          <label
            htmlFor="img"
            className="bg-blue-400 text-white px-5 py-2 flex items-center rounded-lg cursor-pointer"
          >
            <ImageOutlined />
          </label>
          <input type="file" id="img" className="hidden" />
        </div>
        <button
          className="bg-blue-400 text-white px-5 py-2 flex items-center rounded-lg"
          onClick={() => handleClick()}
        >
          <AutoAwesomeOutlined />{" "}
          <span className="ml-3 font-semibold">Poster</span>
        </button>
      </form>
    </div>
  );
}
