import React from "react";
import PostCard from "./PostCard";
import PostFeed from "./PostFeed";
import { posts } from "helpers/mockData";

export default function Feed() {
  return (
    <div className="flex-2 h-full overflow-y-scroll bg-blue-500">
      <PostFeed />
      <PostCard />
    </div>
  );
}
