import React from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Feed from "components/Feed";
import Contact from "components/Contact";
import "../styles/home.css";
export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <Navbar />
      <div className="home flex pt-10 bg-gray-100">
        <Sidebar />
        <Feed />
        <Contact />
      </div>
    </div>
  );
}
