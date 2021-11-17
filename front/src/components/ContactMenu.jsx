import { privateRequest } from "helpers/axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "redux/apiCalls";
import "../styles/contactmenu.css";

export default function ContactMenu({ friends }) {
  const [friendsInfos, setFriendsInfos] = useState([]);

  useEffect(() => {
    const fetchFriendInfos = async () => {
      const friendArray = await Promise.all(
        friends.map((friendId) => {
          return privateRequest.get(`/users/one?userId=${friendId}`);
        })
      );
      setFriendsInfos(friendArray.map((a) => a.data));
    };

    fetchFriendInfos();
  }, [friends]);

  const [active, setActive] = useState(false);
  return (
    <div className="bg-white w-10/12 rounded-lg margin-left-right-auto  py-1 shadow-sm">
      {friendsInfos.map((friend, key) => (
        <div
          className="flex items-center justify-between py-2 transition-all px-10 cursor-pointer rounded-lg hover:bg-blue-200"
          key={key}
        >
          <Link to={`/profile/${friend._id}`} key={friend._id}>
            <div className="flex items-center">
              <img
                src={friend.profilePicture}
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
