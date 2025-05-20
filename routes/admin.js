const express = require('express');
const router = express.Router();
require('dotenv').config();
// Simple password check for admin
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // Change this to a secure password

router.post('/login', async (req, res) => {
  try {
    const { password } = req.body;
    
    if (password === ADMIN_PASSWORD) {
      res.json({ 
        success: true, 
        message: 'Login successful',
        token: 'admin-token' // Simple token for demo
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 