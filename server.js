// server.js
require('dotenv').config(); // Ensure you have the dotenv package installed
const express = require('express');
const stripe = require('stripe')('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'); // Use your Stripe secret key from .env
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// Payment Route
app.post('/process_payment', async (req, res) => {
    // Your Stripe charge creation logic here
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
