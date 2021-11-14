import React from "react";
import ContactMenu from "./ContactMenu";

export default function Contact() {
  return (
    <div className="flex-1 overflow-y-scroll">
      <div className="flex items-center justify-between mb-10 w-10/12 margin-left-right-auto">
        <h3 className="text-xl font-bold text-gray-500">Mes contacts</h3>
        <p className="bg-gray-300 px-2 text-lg rounded-lg text-white font-bold">
          68
        </p>
      </div>
      <ContactMenu />
    </div>
  );
}
