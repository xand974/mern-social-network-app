import React from "react";
import "../styles/profilebanner.css";
export default function ProfileBanner() {
  return (
    <div>
      <div className="relative w-full h-96 shadow-lg rounded-lg  bg-white ">
        <img
          src="https://images.unsplash.com/photo-1637028156579-a45b8bcce0c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
        <div className="profile__banner--img absolute w-32 h-32 bg-black rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://images.unsplash.com/photo-1506671179261-38e9b2c707c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="mt-12 w-8/12 margin-left-right-auto">
        <h1 className="text-center text-2xl mb-4 font-semibold">
          Alexandre Malet
        </h1>
        <hr className="w-20 margin-left-right-auto border-gray-700" />
        <p className="text-center mt-4 font-light">
          <q>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            asperiores fugit vero doloribus fugiat, sequi distinctio placeat
            quis molestias harum.
          </q>
        </p>
      </div>
    </div>
  );
}
