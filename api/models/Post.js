const mongoose = require("mongoose");

const { Schema } = mongoose;

const postScema = new Schema(
  {
    userId: String,
    content: String,
    comments: [
      {
        comment: String,
        userId: String,
        date: {
          type: String,
          default: new Date(Date.now()).toLocaleDateString("fr-FR"),
        },
      },
    ],
    likes: {
      type: Array,
      default: [],
    },
    notePicture: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Post", postScema);
