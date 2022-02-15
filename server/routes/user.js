// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controllers/user');

// Get Express Router Function..
const router = express.Router();

/**
 * /api/user
 * http://localhost:3000/api/user
 */

router.get('/get-user', controller.getUserLists);

// Export All router..
module.exports = router;
