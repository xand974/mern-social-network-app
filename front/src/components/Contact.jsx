import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriends } from "redux/apiCalls";
import ContactMenu from "./ContactMenu";

export default function Contact() {
  const { currentUser } = useSelector((state) => state.user);
  const [friends, setFriends] = useState(currentUser?.user?.friends ?? []);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFriends = async () => {
      const res = await getUserFriends(dispatch, currentUser?.user?._id);
      setFriends(res);
    };
    fetchFriends();
  }, [dispatch, currentUser?.user?._id]);

  return (
    <div className="flex-1 overflow-y-scroll mb-10">
      <div className="flex items-center justify-between mb-5 w-10/12 margin-left-right-auto">
        <h3 className="text-xl font-bold text-gray-500">Mes contacts</h3>
        <p className="bg-gray-300 px-2 text-lg rounded-lg text-white font-bold">
          {friends && friends.length}
        </p>
      </div>
      {friends && friends?.length > 0 && (
        <ContactMenu friends={currentUser?.user?.friends} />
      )}
    </div>
  );
}
