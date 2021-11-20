import React, { useEffect } from "react";
import { useState } from "react";
import { getUser } from "redux/apiCalls";

export default function Comment({ item }) {
  const [userComment, setUserComment] = useState({});

  useEffect(() => {
    getUser(item.userId, setUserComment);
  }, [item.userId]);
  return (
    <div className="flex items-center my-5 justify-between w-full ">
      <img
        src={userComment.profilePicture}
        alt=""
        className="w-16 h-11 rounded-lg object-cover mr-5"
      />
      <div className=" flex-1">
        <p>{userComment.username}</p>
        <p className=" whitespace-wrap overflow-hidden text-blue-500 text-sm mr-5">
          {item.comment}
        </p>
      </div>
      <div className="">
        <span className="text-sm text-gray-500 font-semibold flex-2">
          {item.date}
        </span>
      </div>
    </div>
  );
}
