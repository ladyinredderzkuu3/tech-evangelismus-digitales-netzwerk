const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Registriere neuen Benutzer
router.post('/register', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;