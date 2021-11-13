import React from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Feed from "components/Feed";
import Contact from "components/Contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Sidebar />
        <Feed />
        <Contact />
      </div>
    </div>
  );
}
