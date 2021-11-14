import { AutoAwesomeOutlined } from "@mui/icons-material";
import React from "react";

export default function PostFeed() {
  return (
    <div className="bg-white shadow-lg p-5 flex items-center rounded-lg mb-11">
      <div className="flex items-center flex-1">
        <img
          src="https://images.unsplash.com/photo-1636912305077-eb89d5ede5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt="photoURL of the user"
          className="w-16 h-10 rounded-lg object-cover mr-5"
        />
        <input
          type="text"
          placeholder="Quoi de neuf , Malet ?"
          className="w-full outline-none placeholder-gray-500 "
        />
      </div>
      <button className="bg-blue-400 text-white px-5 py-2 flex items-center rounded-lg">
        <AutoAwesomeOutlined />{" "}
        <span className="ml-3 font-semibold">Poster</span>
      </button>
    </div>
  );
}
