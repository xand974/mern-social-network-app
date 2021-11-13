import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "../styles/login.css";
import { registerInput } from "../helpers/inputs";
import { Link } from "react-router-dom";
export default function Register() {
  const [userInput, setUserInput] = useState({});
  const handleChange = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(userInput);
  return (
    <div className="register-background h-screen w-screen overflow-hidden flex justify-center items-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white h-30  w-96 shadow-2xl flex items-center  flex-col"
      >
        <h1 className="flex-1 text-blue-800 text-xl mt-3 ">
          Bienvenue ! connectez vous
        </h1>
        {registerInput.map((input) => (
          <FormInput
            key={input.id}
            errorMessage={input.errorMessage}
            item={input}
            onChange={handleChange}
            label={input.label}
          />
        ))}
        <button className="p-4 bg-blue-200 rounded-lg text-white shadow-2xl mb-5 mt-5">
          S'enregistrer
        </button>
        <Link to="/login" className=" border-b-2 mb-5">
          <span className="text-gray-400 text-center">se connecter</span>
        </Link>
      </form>
    </div>
  );
}
