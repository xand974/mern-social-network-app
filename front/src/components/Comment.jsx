import React from "react";

export default function Comment({ item }) {
  return (
    <div className="flex items-center my-5 justify-between w-full ">
      <img
        src="https://images.unsplash.com/photo-1633114074431-746f5b25ec85?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        alt=""
        className="w-16 h-11 rounded-lg object-cover mr-5"
      />
      <div className=" flex-1">
        <p>Morgane Lartin</p>
        <p className=" whitespace-wrap overflow-hidden text-blue-500 text-sm mr-5">
          {item.body}
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
