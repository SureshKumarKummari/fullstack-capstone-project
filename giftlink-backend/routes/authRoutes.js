// Step 1 - Task 2: Import necessary packages
const express = require('express');
const app = express();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const connectToDatabase = require('../models/db');
const router = express.Router();
const dotenv = require('dotenv');
const pino = require('pino'); 

// Step 1 - Task 3: Create a Pino logger instance
const logger = pino();

dotenv.config();

// Step 1 - Task 4: Create JWT secret
const JWT_SECRET = process.env.JWT_SECRET;


// Register endpoint
router.post('/register', async (req, res) => {
    try {
        // Step 2 implementation will go here
        res.json({ message: "Register endpoint ready" });
    } catch (error) {
        logger.error(`Registration error: ${error}`);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
