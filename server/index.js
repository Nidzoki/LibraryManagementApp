require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Spajanje na MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/library')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));

// Test ruta
app.get('/', (req, res) => {
  res.send('Backend radi!');
});

// Pokreni server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));