import React, { useState } from "react";
import { registerInput } from "../helpers/inputs";
import FormInput from "../components/FormInput";
import "../styles/register.css";
import { Link } from "react-router-dom";

export default function Login() {
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
    <div className="background h-screen w-screen overflow-hidden flex justify-center items-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white h-3/4  w-96 shadow-2xl flex items-center  flex-col"
      >
        <h1 className=" text-blue-800 text-xl mt-3 w-3/4 text-center  flex-1 pt-4 ">
          Bienvenue à vous, remplissez vite les boîtes
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
        <button className="p-4 bg-blue-200 rounded-lg text-white shadow-2xl mb-10">
          S'enregistrer
        </button>
        <Link to="/register" className=" border-b-2 mb-10">
          <span className="text-gray-400 text-center">se connecter</span>
        </Link>
      </form>
    </div>
  );
}
