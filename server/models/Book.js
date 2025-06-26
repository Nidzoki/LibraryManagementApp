const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  genre: String,
  author: String,
  publisher: String,
  totalCopies: { type: Number, required: true },
  borrowedCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Book', bookSchema);