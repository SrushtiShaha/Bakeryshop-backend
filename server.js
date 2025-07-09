const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // ✅ Load environment variables first

const app = express(); // ✅ Define app before using it

// Enable CORS for React frontend
// app.use(cors({
//   origin: 'http://localhost:3=5000', // Allow React app
//   credentials: true
// }));

const mycors = require('cors');

app.use(mycors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json()); // Parse JSON

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('.env file is missing or MONGO_URI not defined');
  process.exit(1);
}

mongoose.connect(MONGO_URI).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Test route
app.get('/', (req, res) => {
  res.send('Bakery Server is running ✅');
});

// API Routes
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/sales', require('./routes/salesRoutes'));
app.use('/api/ledger', require('./routes/ledgerRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
