import React from "react";
import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";
import "../styles/sidebarmenu.css";

export default function SidebarMenu() {
  const user = {
    id: "45465464",
  };
  const menuItems = [
    { id: 1, name: "Home", icon: "HomeOutlined", link: "/", notifications: 3 },
    {
      id: 2,
      name: "Profile",
      icon: "PersonOutlined",
      link: `/profile/${user.id}`,
      notifications: 2,
    },
    { id: 3, name: "Settings", icon: "SettingsOutlined", link: "/settings" },
    {
      id: 4,
      name: "Notifications",
      icon: "NotificationsOutlined",
      link: "/notifications",
    },
  ];
  return (
    <div className="bg-white w-10/12 rounded-lg margin-left-right-auto  mt-12 py-1 shadow-sm">
      {menuItems.map((item, key) => (
        <Link to={item.link} key={key}>
          <div
            className="transition-menu-sidebar flex items-center justify-between py-5 transition-all px-10 border-b-2 border-gray-100 cursor-pointer"
            key={item.id}
          >
            <div className="flex items-center">
              <DynamicIcon iconName={item.icon} />
              <p className="text-sidebar text-gray-400 font-bold text-lg">
                {item.name}
              </p>
            </div>
            {item.notifications && (
              <div className=" bg-blue-400 rounded-full w-5 h-5 flex items-center justify-center p-3  ">
                <p className="text-white font-bold">{item.notifications}</p>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
