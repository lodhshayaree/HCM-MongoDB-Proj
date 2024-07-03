const express = require('express');
const Treatments = require('../models/Treatments');
const router = express.Router();

// GET all treatments
router.get('/', async (req, res) => {
    try {
      const treatments = await Treatments.find();
      res.status(200).json(treatments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// POST a new treatment
router.post('/', async (req, res) => {
    try {
      const treatments = new Treatments(req.body);
      await treatments.save();
      res.status(201).json(treatments);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

// Read treatment by ID
router.get('/:id', async (req, res) => {
  try {
    const treatments = await Treatments.findById(req.params.id);
    if (!treatments) {
      return res.status(404).json('Treatment not found');
    }
    res.json(treatments);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Update treatment by ID
router.put('/:id', async (req, res) => {
  try {
    const treatments = await Treatments.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!treatments) {
      return res.status(404).json('Treatment not found');
    }
    res.json(treatments);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Delete treatment by ID
router.delete('/:id', async (req, res) => {
  try {
    const treatments = await Treatments.findByIdAndDelete(req.params.id);
    if (!treatments) {
      return res.status(404).json('Treatment not found');
    }
    res.json('Treatment deleted');
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
