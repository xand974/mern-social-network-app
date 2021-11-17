const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    username: {
      type: String,
      require: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 8,
    },
    friends: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    profilePicture: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    backgroundPicture: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bio: { type: String, default: "J'aime les pommes" },
    city: { type: String, default: "Quelque part dans le monde" },
    from: { type: String, default: "Quelque part dans le monde" },
    relationship: {
      type: String,
      EnCouple: "En couple",
      Celibataire: "Célibataire",
      Marié: "Marié",
    },
  },
  { timestamps: true }
);

userSchema.index({ username: "text" });

module.exports = new mongoose.model("User", userSchema);
