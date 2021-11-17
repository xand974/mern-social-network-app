import CardFeed from "components/CardFeed";
import Contact from "components/Contact";
import ProfileBanner from "components/ProfileBanner";
import ProfileInfos from "components/ProfileInfos";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUser, getProfileUserPosts } from "redux/apiCalls";
import Layout from "./Layout";

export default function Profile() {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const USER_ID = location.pathname.split("/")[2];
  useEffect(() => {
    getUser(USER_ID, setUser);
    getProfileUserPosts(USER_ID, setPosts);
  }, [USER_ID]);

  return (
    <Layout>
      <div className="flex-2 overflow-scroll">
        <ProfileBanner
          bio={user.bio}
          profilePicture={user.profilePicture}
          backgroundPicture={user.backgroundPicture}
          fullName={user.fullName}
          id={user._id}
        />
        {posts.map((post, key) => (
          <CardFeed post={post} key={key} />
        ))}
      </div>
      <div className="flex-1 overflow-y-scroll">
        <ProfileInfos user={user} />
        <Contact />
      </div>
    </Layout>
  );
}
