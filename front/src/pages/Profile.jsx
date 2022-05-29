import CardFeed from "components/CardFeed";
import Contact from "components/Contact";
import Loading from "components/Loading";
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
  const [loading, setLoading] = useState([]);
  const USER_ID = location.pathname.split("/")[2];

  useEffect(() => {
    const getUserAndProfile = async () => {
      try {
        setLoading(true);
        await getUser(USER_ID, setUser);
        await getProfileUserPosts(USER_ID, setPosts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    getUserAndProfile();
  }, [USER_ID]);

  return (
    <Layout>
      <Loading loading={loading} />
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
