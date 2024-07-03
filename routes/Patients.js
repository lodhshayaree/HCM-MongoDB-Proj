const express = require('express');
const Patients = require('../models/Patients');
const router = express.Router();

// GET all patients
router.get('/', async (req, res) => {
    try {
      const patients = await Patients.find();
      res.status(200).json(patients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


// POST register a new patient
router.post('/register', async (req, res) => {
  try {
      const { name, age, email, ...otherDetails } = req.body;
      const newPatient = new Patients({ name, age, email, ...otherDetails });
      await newPatient.save();
      res.status(201).json(newPatient);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});


// Read patient by ID
router.get('/:id', async (req, res) => {
  try {
    const patients = await Patients.findById(req.params.id);
    if (!patients) {
      return res.status(404).json('Patient not found');
    }
    res.status(200).json(patients);
  } catch (err) {
    res.status(400).json(err.message); // Sending only the error message
  }
});

// Update patient by ID
router.put('/:id', async (req, res) => {
  try {
    const patients = await Patients.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!Patients) {
      return res.status(404).json('Patient not found');
    }
    res.json(patients);
  } catch (err) {
    res.status(400).json(err.message); // Sending only the error message
  }
});

// Delete patient by ID
router.delete('/:id', async (req, res) => {
  try {
    const patients = await Patients.findByIdAndDelete(req.params.id);
    if (!patients) {
      return res.status(404).json('Patients not found');
    }
    res.json('Patients deleted');
  } catch (err) {
    res.status(400).json(err.message); // Sending only the error message
  }
});

module.exports = router;
