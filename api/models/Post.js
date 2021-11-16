const mongoose = require("mongoose");

const { Schema } = mongoose;

const postScema = new Schema(
  {
    userId: String,
    content: String,
    comments: [{ body: String, date: Date }],
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
