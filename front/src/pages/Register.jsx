import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "../styles/login.css";
import { registerInput } from "../helpers/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/apiCalls";
export default function Register() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({});
  const { error, pending } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="register-background h-screen w-screen overflow-hidden flex justify-center items-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white h-30  w-96 shadow-2xl flex items-center  flex-col"
      >
        <h1 className="flex-1 text-blue-800 text-xl mt-3 ">
          Inscrivez-vous, c'est gratuit
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
        <button
          className="p-4 bg-blue-200 rounded-lg text-white shadow-2xl mb-5 mt-5"
          onClick={() => register(userInput, navigate, dispatch)}
        >
          {pending ? <span>loading</span> : <span>S'enregistrer</span>}
        </button>
        {error && <span className="text-red-500">Une erreur est survenu</span>}
        <Link to="/login" className=" border-b-2 mb-5">
          <span className="text-gray-400 text-center">se connecter</span>
        </Link>
      </form>
    </div>
  );
}
