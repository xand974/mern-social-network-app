import React from "react";

export default function ProfileInfos({ user }) {
  const date = new Date(user.createdAt).toLocaleDateString("fr-FR");
  return (
    <div className=" w-10/12 margin-left-right-auto mb-10">
      <h3 className="text-xl font-bold text-gray-500 mb-5">à propos</h3>
      <div className="w-full bg-white flex flex-col shadow-lg rounded-lg p-5">
        <div className="flex items-center">
          <span className="font-bold flex-1 my-2 text-gray-500">
            Nom complet :
          </span>
          <span className="font-light">{user.fullName}</span>
        </div>

        <div className="flex items-center">
          <span className="font-bold flex-1 my-2 text-gray-500">Pseudo :</span>
          <span className="font-light">@{user.username}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold flex-1 my-2 text-gray-500">Posts :</span>
          <span className="font-light">{user.posts?.length}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold flex-1 my-2 text-gray-500">Ville :</span>
          <span className="font-light  w-40 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {user.city}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold flex-1 my-2 text-gray-500 ">de :</span>
          <span className="font-light w-40 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {user.from}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold flex-1 my-2 text-gray-500">crée le :</span>
          <span className="font-light">{date}</span>
        </div>
      </div>
    </div>
  );
}
