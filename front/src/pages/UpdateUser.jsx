import React from "react";

export default function UpdateUser() {
  return (
    <div>
      <form>
        <div className="">
          <label htmlFor="de">De</label>
          <input type="text" id="de" placeholder="Los angeles" />
        </div>
        <div className="">
          <label htmlFor="city">Ville</label>
          <input type="text" id="city" placeholder="Montpellier" />
        </div>
        <div className="">
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" placeholder="J'aime les pommes" />
        </div>
        <div className="">
          <label htmlFor="img_profile">Photo de profil</label>
          <input type="file" id="img_profile" />
        </div>
        <div className="">
          <label htmlFor="img_background">Image de fond</label>
          <input type="file" id="img_background" />
        </div>
        <button>Continuer</button>
      </form>
    </div>
  );
}
