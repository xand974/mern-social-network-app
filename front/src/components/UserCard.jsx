import React from "react";
import { useSelector } from "react-redux";

export default function UserCard() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex w-10/12 margin-x-auto p-5 rounded-lg items-center bg-white shadow-sm">
      <div className="">
        <img
          className="w-16 h-16 rounded-lg mr-5"
          src={currentUser.user.profilePicture}
          alt=""
        />
      </div>
      <div className="">
        <h5 className="text-blue-900 font-bold">{currentUser.user.fullName}</h5>
        <p className="text-gray-400">@{currentUser.user.username}</p>
      </div>
    </div>
  );
}
