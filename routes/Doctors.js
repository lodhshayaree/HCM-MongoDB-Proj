const express = require('express');
const Doctors = require('../models/Doctors');
const router = express.Router();

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctors.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new doctor
router.post('/', async (req, res) => {
  try {
    const doctors = new Doctors(req.body);
    await doctors.save();
    res.status(201).json(doctors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Read doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const doctors = await Doctors.findById(req.params.id);
    if (!doctors) {
      return res.status(404).json('Doctor not found');
    }
    res.json(doctors);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Update doctor by ID
router.put('/:id', async (req, res) => {
  try {
    const doctors = await Doctors.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctors) {
      return res.status(404).json('Doctor not found');
    }
    res.json(doctors);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Delete doctor by ID
router.delete('/:id', async (req, res) => {
  try {
    const doctors = await Doctors.findByIdAndDelete(req.params.id);
    if (!doctors) {
      return res.status(404).json('Doctor not found');
    }
    res.json('Doctor deleted');
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
