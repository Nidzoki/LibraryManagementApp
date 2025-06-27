require('dotenv').config();
const express = require('express');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/registerLogin');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));

app.get('/', (req, res) => {
  res.send('Backend radi!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));