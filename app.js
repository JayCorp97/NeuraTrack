// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS) from /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MySQL database
const db = require('./config/db');
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API routes
const userRoutes = require('./routes/userRoutes');
const elderRoutes = require('./routes/elderRoutes');
const authenticateToken = require('./middleware/auth');

app.use('/api/users', userRoutes);
app.use('/api/elders', elderRoutes);

// Example protected route (JWT required)
app.get('/api/secure-data', authenticateToken, (req, res) => {
  res.json({ message: 'You are authenticated!' });
});

// Route for root path - serves login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const tracer = require('dd-trace').init({
  service: 'NeuraTrack', // name service
  env: process.env.NODE_ENV || 'development',
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up and running at localhost:${PORT}`);
});
