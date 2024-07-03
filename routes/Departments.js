const express = require('express');
const Departments = require('../models/Departments');
const router = express.Router();

// GET all departments
router.get('/', async (req, res) => {
    try {
      const departments = await Departments.find();
      res.status(200).json(departments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});
  
// POST a new department
router.post('/', async (req, res) => {
    try {
      const departments = new Departments(req.body);
      await departments.save();
      res.status(201).json(departments);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});


// Read department by ID
router.get('/:id', async (req, res) => {
  try {
    const departments = await Departments.findById(req.params.id);
    if (!departments) {
      return res.status(404).json('Department not found');
    }
    res.json(departments);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Update department by ID
router.put('/:id', async (req, res) => {
  try {
    const departments = await Departments.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!departments) {
      return res.status(404).json('Department not found');
    }
    res.json(departments);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Delete department by ID
router.delete('/:id', async (req, res) => {
  try {
    const departments = await Departments.findByIdAndDelete(req.params.id);
    if (!departments) {
      return res.status(404).json('Department not found');
    }
    res.json('Department deleted');
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
