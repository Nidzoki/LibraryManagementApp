const mongoose = require('mongoose');

const borrowedBookSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  dueDate: { type: Date, required: true }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  borrowedBooks: [borrowedBookSchema],
  membershipExpires: { type: Date, required: true }
});

module.exports = mongoose.model('User', userSchema);