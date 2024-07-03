const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const server = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware setup
server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));

// Set static folder for serving frontend assets
server.use(express.static(path.join(__dirname, 'public')));

// Import routes
const patientRoutes = require('./routes/Patients');
const appointmentRoutes = require('./routes/Appointments');
const doctorRoutes = require('./routes/Doctors');
const treatmentRoutes = require('./routes/Treatments');
const departmentRoutes = require('./routes/Departments');

// Use routes
server.use('/api/Patients', patientRoutes);
server.use('/api/Appointments', appointmentRoutes);
server.use('/api/Doctors', doctorRoutes);
server.use('/api/Treatments', treatmentRoutes);
server.use('/api/Departments', departmentRoutes);

// Serve index.html as the main entry point
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
