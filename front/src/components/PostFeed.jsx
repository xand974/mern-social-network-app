import { AutoAwesomeOutlined } from "@mui/icons-material";
import React from "react";

export default function PostFeed() {
  return (
    <div className="bg-white shadow-lg p-5">
      <input type="text" placeholder="Quoi de neuf , Malet ?" />
      <button>
        <AutoAwesomeOutlined /> Poster
      </button>
    </div>
  );
}
