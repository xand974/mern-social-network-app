import React from "react";
import { useState } from "react";
import "../styles/dropdown.css";

export default function Dropdown({ menus = [], handleDropdown }) {
  const [active, setActive] = useState(false);
  return (
    <div className=" relative flex items-center justify-center">
      <button
        className={`dropdown-btn text-gray-500 font-bold  rounded-md px-2 hover:bg-white transition-all`}
        onClick={() => setActive(true)}
      >
        ...
      </button>
      <div
        className={`dropdown ${active ? "active" : ""}`}
        onBlur={() => setActive(false)}
      >
        {menus.map((item, index) => (
          <button
            key={index}
            onClick={() => handleDropdown(item.tag, setActive)}
          >
            <span>{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
