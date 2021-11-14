import React from "react";

export default function UserCard() {
  return (
    <div className="flex w-10/12 margin-x-auto p-5 rounded-lg items-center bg-white shadow-sm">
      <div className="">
        <img
          className="w-16 h-16 rounded-lg mr-5"
          src="https://images.unsplash.com/photo-1603102796296-9c152db1ba32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
          alt=""
        />
      </div>
      <div className="">
        <h5 className="text-blue-900 font-bold">Alexandre Malet</h5>
        <p className="text-gray-400">@xand974</p>
      </div>
    </div>
  );
}
