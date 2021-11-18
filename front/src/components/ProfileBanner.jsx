import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddFriend, handleRemoveFriend } from "redux/apiCalls";
import "../styles/profilebanner.css";
export default function ProfileBanner({
  bio,
  profilePicture,
  backgroundPicture,
  fullName,
  id,
}) {
  const { currentUser } = useSelector((state) => state.user);
  const [isFriend, setIsFriend] = useState(
    currentUser.user.friends.includes(id)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFriend(currentUser.user.friends.includes(id));
  }, [currentUser.user.friends, id]);

  return (
    <div>
      <div className="relative w-full h-96 shadow-lg rounded-lg  bg-white ">
        <img
          src={backgroundPicture}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
        <div className="profile__banner--img absolute w-32 h-32 bg-black rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={profilePicture}
            alt=""
          />
        </div>
        {currentUser.user._id !== id && (
          <>
            {isFriend ? (
              <div className="profile__banner-button absolute right-4 px-4 py-1 bg-black text-white rounded-lg shadow-md -bottom-16 ">
                <button
                  onClick={() => {
                    handleRemoveFriend(dispatch, id);
                  }}
                >
                  Supprimer <Remove />
                </button>
              </div>
            ) : (
              <div className="profile__banner-button absolute right-4 px-4 py-1 bg-black text-white rounded-lg shadow-md -bottom-16 ">
                <button onClick={() => handleAddFriend(dispatch, id)}>
                  Ajouter <Add />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-12 w-8/12 margin-left-right-auto">
        <h1 className="text-center text-2xl mb-4 font-semibold">{fullName}</h1>
        <hr className="w-20 margin-left-right-auto border-gray-700" />
        <p className="text-center mt-4 font-light">
          <q>{bio}</q>
        </p>
      </div>
    </div>
  );
}
