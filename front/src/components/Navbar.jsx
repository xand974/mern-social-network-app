import { Logout, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "redux/apiCalls";
import logo from "../Images/Marque.png";
import "../styles/navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const handleSearch = () => {
    navigate(`/search?search_query=${userInput}`);
  };
  return (
    <div className=" w-full  border-b-2 h-20 bg-white ">
      <div className="margin-x-auto flex items-center h-full w-11/12">
        <div className="flex-3 flex justify-start  items-center ">
          <Link to="/">
            <div className="img cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
        </div>
        <div className="flex-2 flex items-center justify-end ">
          <form
            className="flex items-center relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="rechercher un post, une personne,.."
              className="bg-gray-100 text-gray-500 w-full outline-none p-2 pl-5 rounded-lg"
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              className={`${
                userInput.length > 0 ? "nav__search-btn" : ""
              } transition-all absolute right-0 bg-white text-sm px-2 py-1 rounded-full  translate-x-10 hidden`}
              onClick={handleSearch}
            >
              <SearchOutlined />
            </button>
          </form>
          <button
            onClick={() => {
              logout(dispatch, navigate);
            }}
            className="ml-10 flex items-center bg-blue-400 text-white px-5 py-2 rounded-lg cursor-pointer"
          >
            <span className="flex items-center">
              <Logout className="mr-2" /> Logout
            </span>
          </button>
          <Link to="/update">
            <img
              className="h-10 w-10 object-cover rounded-xl ml-10"
              src={currentUser.user.profilePicture}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
