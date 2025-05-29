const express = require('express');
const router = express.Router();
const Elder = require('../models/elder');

// GET all elders
router.get('/', (req, res) => {
  Elder.getAll((err, results) => {
    if (err) {
      console.error('Error fetching elders:', err);
      return res.status(500).json({ message: 'Error fetching elders' });
    }
    res.json(results);
  });
});

// GET one elder by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;

  Elder.getById(id, (err, results) => {
    if (err) {
      console.error('Error fetching elder:', err);
      return res.status(500).json({ message: 'Error fetching elder' });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ message: 'Elder not found' });
    }

    res.json(results[0]);
  });
});

// POST - Add a new elder
router.post('/', (req, res) => {
  const elderData = req.body;

  Elder.create(elderData, (err, result) => {
    if (err) {
      console.error('Error adding elder:', err);
      return res.status(500).json({ message: 'Error adding elder' });
    }

    res.status(201).json({ message: 'Elder added successfully', id: result.insertId });
  });
});

// PUT - Update elder by ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  Elder.update(id, updatedData, (err) => {
    if (err) {
      console.error('Error updating elder:', err);
      return res.status(500).json({ message: 'Error updating elder' });
    }

    res.json({ message: 'Elder updated successfully' });
  });
});

// DELETE - Remove elder by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Elder.delete(id, (err) => {
    if (err) {
      console.error('Error deleting elder:', err);
      return res.status(500).json({ message: 'Error deleting elder' });
    }

    res.json({ message: 'Elder deleted successfully' });
  });
});

module.exports = router;
