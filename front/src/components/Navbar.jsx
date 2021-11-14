import { AddBoxOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Marque.png";
import "../styles/navbar.css";
export default function Navbar() {
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
          <form className="flex items-center ">
            <input
              type="text"
              placeholder="search"
              className="bg-gray-100 text-gray-500 w-full outline-none p-2 pl-5 rounded-lg"
            />
            <Link
              to="/create"
              className="ml-10 flex items-center bg-blue-400 text-white px-5 py-2 rounded-lg cursor-pointer"
            >
              <span className="flex items-center">
                <AddBoxOutlined className="mr-2" /> Create
              </span>
            </Link>
          </form>
          <img
            className="h-10 w-10 object-cover rounded-xl ml-10"
            src="https://images.unsplash.com/photo-1633113216164-6469037eafa5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
