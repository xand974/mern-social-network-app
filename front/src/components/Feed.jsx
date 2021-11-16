import React, { useEffect } from "react";
import CardFeed from "./CardFeed";
import PostFeed from "./PostFeed";
import { getTimeLine } from "redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export default function Feed() {
  const dispatch = useDispatch();
  const { timelinePost } = useSelector((state) => state.posts);

  useEffect(() => {
    getTimeLine(dispatch);
  }, [dispatch]);

  return (
    <div className="flex-2 h-full overflow-y-scroll ">
      <PostFeed />
      {timelinePost.map((post, key) => (
        <CardFeed post={post} key={key} />
      ))}
    </div>
  );
}
