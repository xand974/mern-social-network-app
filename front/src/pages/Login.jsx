import React, { useState } from "react";
import { loginInputs } from "../helpers/data";
import FormInput from "../components/FormInput";
import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/apiCalls";

export default function Login() {
  const [userInput, setUserInput] = useState({});
  const { error, pending } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="login-background h-screen w-screen overflow-hidden flex justify-center items-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white h-30  w-96 shadow-2xl flex items-center  flex-col"
      >
        <h1 className=" text-blue-800 text-xl mt-3 w-3/4 text-center  flex-1 pt-4 ">
          Bienvenue, Connectez-vous
        </h1>
        {loginInputs.map((input) => (
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
          onClick={() => login(userInput, dispatch, navigate)}
        >
          {pending ? <span>loading</span> : <span>Se connecter</span>}
        </button>
        {error && (
          <span className="text-red-200">
            Identifiant ou mot de passe incorrect
          </span>
        )}
        <Link to="/register" className="border-b-2 mb-10">
          <span className="text-gray-400 text-center">S'enregistrer</span>
        </Link>
      </form>
    </div>
  );
}
