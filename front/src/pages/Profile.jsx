import CardFeed from "components/CardFeed";
import Contact from "components/Contact";
import Feed from "components/Feed";
import ProfileBanner from "components/ProfileBanner";
import ProfileInfos from "components/ProfileInfos";
import { posts } from "helpers/mockData";
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";

export default function Profile() {
  const location = useLocation();
  const USER_ID = location.pathname.split("/")[2];
  return (
    <Layout>
      <div className="flex-2 overflow-scroll">
        <ProfileBanner />
        {posts.map((post, key) => (
          <CardFeed post={post} key={key} />
        ))}
      </div>
      <div className="flex-1">
        <ProfileInfos />
        <Contact />
      </div>
    </Layout>
  );
}
