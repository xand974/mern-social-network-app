import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/contactmenu.css";
const friends = [
  {
    id: 34541,
    username: "Amanda Miles",
    img: "https://images.unsplash.com/photo-1636908681421-bff3b85f7303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    notification: 5,
  },

  {
    id: 34834,
    username: "Melissa Byron",
    img: "https://images.unsplash.com/photo-1636896749622-45cfa36c20e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3153153,
    username: "Amanda Miles",
    img: "https://images.unsplash.com/photo-1636889864559-39d71fe1dda7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    notification: 7,
  },
  {
    id: 6334,
    username: "Simon alet",
    img: "https://images.unsplash.com/photo-1633113215883-a43e36bc6178?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    notification: 7,
  },
];

export default function ContactMenu() {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-white w-10/12 rounded-lg margin-left-right-auto  py-1 shadow-sm">
      {friends.map((friend) => (
        <div className="flex items-center justify-between py-2 transition-all px-10 cursor-pointer hover:bg-blue-200">
          <Link to={`/profile/${friend.id}`} key={friend.id}>
            <div className="flex items-center">
              <img
                src={friend.img}
                alt=""
                className="w-12 h-14 rounded-lg mr-5 object-cover"
              />
              <p className="text-contact text-blue-900 font-bold text-base">
                {friend.username}
              </p>
            </div>
          </Link>
          {friend.notification ? (
            <div className=" bg-blue-400 rounded-full w-5 h-5 flex items-center justify-center p-3">
              <p className="text-white font-bold">{friend.notification}</p>
            </div>
          ) : (
            <div
              className=" relative flex items-center justify-center"
              onBlur={() => setActive(false)}
            >
              <button
                className={`dropdown-btn text-gray-500 font-bold  rounded-md px-2 hover:bg-white transition-all`}
                onClick={() => setActive(true)}
              >
                ...
              </button>
              <div className={`dropdown ${active ? "active" : ""}`}>
                <Link to={`/messages/${friend.id}`}>
                  <span>envoyer un message</span>
                </Link>
                <Link to={`/profile/${friend.id}`}>
                  <span>profile</span>
                </Link>
                <button className="btn-dropdown">
                  <span>supprimer des amis</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
