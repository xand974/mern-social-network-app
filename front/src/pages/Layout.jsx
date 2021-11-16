import React from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import "../styles/layout.css";
export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <Navbar />
      <div className="layout flex pt-10 bg-gray-100">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
