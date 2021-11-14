import React from "react";
import SidebarMenu from "./SidebarMenu";
import UserCard from "./UserCard";

export default function Sidebar() {
  return (
    <div className="flex-1 h-full overflow-y-scroll flex flex-col  ">
      <UserCard />
      <SidebarMenu />
    </div>
  );
}
