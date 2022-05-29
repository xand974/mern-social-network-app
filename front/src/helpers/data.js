export const loginInputs = [
  {
    id: 1,
    type: "email",
    placeholder: "votre adresse mail",
    errorMessage: "veuillez entrer une adresse mail valide",
    label: "Email",
    name: "email",
  },

  {
    id: 2,
    type: "password",
    placeholder: "aze123",
    label: "Mot de passe",

    name: "password",
  },
];

export const registerInput = [
  {
    id: 1,
    type: "email",
    placeholder: "votre adresse mail",
    errorMessage: "veuillez entrer une adresse mail valide",
    label: "Email",
    name: "email",
  },
  {
    id: 2,
    type: "text",
    placeholder: "john_doe",
    errorMessage: "votre pseudo doit comporter au moins 4 lettres",
    label: "Pseudo",
    pattern: "^[A-Za-z0-9]{3,16}$",
    name: "username",
  },
  {
    id: 4,
    type: "text",
    placeholder: "John Doe",
    label: "Nom/Prénom",
    name: "fullName",
  },
  {
    id: 3,
    type: "password",
    placeholder: "aze123",
    label: "Mot de passe",
    name: "password",
  },
];
