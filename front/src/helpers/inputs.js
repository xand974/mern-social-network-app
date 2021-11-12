export const loginInputs = [
  {
    id: 1,
    type: "email",
    placeholder: "votre adresse mail",
    required: true,
    errorMessage: "veuillez entrer une adresse mail valide",
    label: "Email",
    name: "email",
  },
  {
    id: 2,
    type: "text",
    placeholder: "john_doe",
    required: true,
    errorMessage: "votre pseudo doit comporter au moins 4 lettres",
    label: "Pseudo",
    pattern: "^[A-Za-z0-9]{3,16}$",
    name: "username",
  },
  {
    id: 3,
    type: "password",
    placeholder: "aze123",
    required: true,
    errorMessage:
      "votre mot de passe doit avoir au minimum 8 charactères et au moins 1 majuscule et un charactère spécial",
    label: "Mot de passe",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    name: "password",
  },
];

export const registerInput = [
  {
    id: 1,
    type: "email",
    placeholder: "votre adresse mail",
    required: true,
    errorMessage: "veuillez entrer une adresse mail valide",
    label: "Email",
    name: "email",
  },
  {
    id: 2,
    type: "password",
    placeholder: "aze123",
    required: true,
    label: "Mot de passe",
    name: "password",
  },
];
