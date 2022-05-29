import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "../styles/login.css";
import { registerInput } from "../helpers/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { register } from "redux/apiCalls";

export default function Register() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const signup = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await register(userInput, navigate);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      throw error;
    }
  };
  return (
    <div className="register-background h-screen w-screen overflow-hidden flex justify-center items-center ">
      <form className="bg-white h-30  w-96 shadow-2xl flex items-center  flex-col">
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
          onClick={(e) => signup(e)}
        >
          {loading ? <span>loading</span> : <span>S'enregistrer</span>}
        </button>
        {error && <span className="text-red-500">Une erreur est survenu</span>}
        <Link to="/login" className=" border-b-2 mb-5">
          <span className="text-gray-400 text-center">se connecter</span>
        </Link>
      </form>
    </div>
  );
}
