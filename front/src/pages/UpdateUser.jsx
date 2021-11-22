import { ArrowBackIos } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const inputUpdate = [
  {
    id: 1,
    title: "De",
    placeholder: "Los angeles",
    type: "text",
    name: "from",
  },
  {
    id: 2,
    title: "Ville",
    placeholder: "Montpellier",
    type: "text",
    name: "city",
  },
  {
    id: 3,
    title: "Bio",
    placeholder: "J'aime les pommes",
    type: "text",
    name: "bio",
  },
  {
    id: 4,
    title: "Photo de profile",
    type: "file",
    name: "profilePicture",
  },
  {
    id: 5,
    title: "Image de fond",
    type: "file",
    name: "backgroundPicture",
  },
];

export default function UpdateUser() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-300">
      <form className="w-96 h-96 bg-white shadow-2xl rounded-2xl flex flex-col justify-between p-3">
        <div className="my-3 flex items-center">
          <Link
            to="/"
            className="bg-blue-500 text-white rounded-full flex items-center w-8 h-8 justify-center mr-10"
          >
            <ArrowBackIos />
          </Link>
          <h1 className="text-gray-400 ">Mettre à jour vos données</h1>
        </div>
        {inputUpdate.map((input) => (
          <div className="flex" key={input.id}>
            <label className="flex-2" htmlFor="de">
              {input.title}
            </label>
            <input
              type={input.type}
              className="flex-3 outline-none bg-transparent border-b-2 border-gray-300"
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
            />
          </div>
        ))}
        <button className="bg-black px-3 py-1 rounded-lg text-white w-8/12 margin-left-right-auto ">
          Mettre à jour
        </button>
      </form>
    </div>
  );
}
