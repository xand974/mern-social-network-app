import React from "react";
import { Link } from "react-router-dom";

export default function SearchCard({ item }) {
  return (
    <Link to={`/profile/${item._id}`}>
      <div className="flex items-center mb-5 w-8/12 bg-white rounded-lg p-5 shadow-lg">
        <img
          className="w-16 h-16 rounded-lg mr-5"
          src={item.profilePicture}
          alt=""
        />
        <div className="flex flex-col flex-1">
          <p className="font-semibold mb-2">{item.fullName}</p>
          <p className="font-light w-56 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {item.bio || "pas de bio"}
          </p>
        </div>
      </div>
    </Link>
  );
}
