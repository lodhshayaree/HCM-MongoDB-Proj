const express = require('express');
const Appointments = require('../models/Appointments');
const router = express.Router();

// GET all appointments
router.get('/', async (req, res) => {
    try {
      const appointments = await Appointments.find();
      res.status(200).json(appointments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Get appointments by patientId
router.get('/Appointments', async (req, res) => {
  try {
    const { patientId } = req.query;
    console.log('Received patientId:', patientId);

    if (!patientId) {
      console.log('No patientId provided.');
      return res.status(400).json({ message: 'patientId query parameter is required' });
    }

    const appointments = await Appointments.find({ patientId: patientId });
    console.log('Appointments found:', appointments);
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error.message);
    res.status(500).json({ message: error.message });
  }
});
  
// POST a new appointment
router.post('/', async (req, res) => {
    try {
      const appointments = new Appointments(req.body);
      await appointments.save();
      res.status(201).json(appointments);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});


// Read appointment by ID
router.get('/:id', async (req, res) => {
  try {
    const appointments = await Appointments.findById(req.params.id);
    if (!appointments) {
      return res.status(404).json('Appointment not found');
    }
    res.json(appointments);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Update appointment by ID
router.put('/:id', async (req, res) => {
  try {
    const appointments = await Appointments.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointments) {
      return res.status(404).json('Appointment not found');
    }
    res.json(appointments);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Delete appointment by ID
router.delete('/:id', async (req, res) => {
  try {
    const appointments = await Appointments.findByIdAndDelete(req.params.id);
    if (!appointments) {
      return res.status(404).json('Appointment not found');
    }
    res.json('Appointment deleted');
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
