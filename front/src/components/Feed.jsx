import React, { useEffect, useState } from "react";
import CardFeed from "./CardFeed";
import PostFeed from "./PostFeed";
import { getTimeLine } from "redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

export default function Feed() {
  const dispatch = useDispatch();
  const { timelinePost } = useSelector((state) => state.posts);
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTimeLine = async () => {
      try {
        setLoading(true);
        currentUser && (await getTimeLine(dispatch));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    fetchTimeLine();
  }, [dispatch, currentUser]);

  return (
    <div className="flex-2 h-full overflow-y-scroll ">
      <Loading loading={loading} />
      <PostFeed />
      {timelinePost.map((post, key) => (
        <CardFeed post={post} key={key} />
      ))}
    </div>
  );
}
