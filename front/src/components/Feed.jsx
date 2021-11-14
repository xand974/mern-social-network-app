import React from "react";
import CardFeed from "./CardFeed";
import PostFeed from "./PostFeed";
import { posts } from "helpers/mockData";

export default function Feed() {
  return (
    <div className="flex-2 h-full overflow-y-scroll ">
      <PostFeed />
      {posts.map((post, key) => (
        <CardFeed post={post} key={key} />
      ))}
    </div>
  );
}
