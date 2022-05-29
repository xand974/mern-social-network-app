import { AutoAwesomeOutlined, ImageOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "redux/apiCalls";
import Loading from "./Loading";

export default function PostFeed() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const getImgURL = async () => {
    if (!image) return "";
    return URL.createObjectURL(image);
  };

  const handleClick = async () => {
    try {
      const imgURL = await getImgURL();

      setLoading(true);
      await createPost(
        {
          content: newPost,
          userId: currentUser?.user?._id,
          notePicture: imgURL,
        },
        dispatch
      );
      setNewPost("");
      setImage(undefined);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return (
    <div className="bg-white shadow-lg p-5 flex items-center rounded-lg mb-11">
      <Loading loading={loading} />
      <img
        src={currentUser?.user?.profilePicture}
        alt="photoURL of the user"
        className="w-16 h-10 rounded-lg object-cover mr-5"
      />

      <form
        className="flex items-center w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={newPost}
          placeholder={`Quoi de neuf, ${currentUser?.user?.username} ?`}
          className="w-full flex-1 outline-none placeholder-gray-500 "
          onChange={(e) => setNewPost(e.target.value)}
        />

        <div className="mx-2">
          <label
            htmlFor="img"
            className="bg-blue-400 text-white px-5 py-2 flex items-center rounded-lg cursor-pointer"
          >
            <ImageOutlined />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="img"
            className="hidden"
          />
        </div>
        <button
          className="bg-blue-400 text-white px-5 py-2 flex items-center rounded-lg"
          onClick={() => handleClick()}
        >
          <AutoAwesomeOutlined />{" "}
          <span className="ml-3 font-semibold">Poster</span>
        </button>
      </form>
    </div>
  );
}
