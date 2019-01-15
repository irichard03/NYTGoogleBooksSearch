const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

const book = mongoose.model("book", bookSchema);
module.exports = book;
