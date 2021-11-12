import React, { useState } from "react";
import "../styles/formInput.css";

export default function FormInput({ item, label, errorMessage, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col w-10/12 flex-1 mt-5 ">
      <label className="mb-1 text-lg font-light">{label}</label>
      <input
        onChange={onChange}
        {...item}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        className="outline-none mb-2 border-b-2 border-blue-100 placeholder-gray-200 text-blue-600 font-light pb-1 pl-2 text-sm"
      />
      <span className="error">{errorMessage}</span>
    </div>
  );
}
