const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Update profile route
router.put('/profile', profileController.updateProfile);

module.exports = router;
