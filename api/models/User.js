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
      default: "",
    },
    backgroundPicture: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: String,
    city: String,
    from: String,
    relationship: {
      type: String,
      EnCouple: "en couple",
      Celibataire: "célibataire",
      Marié: "Marié",
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("User", userSchema);
