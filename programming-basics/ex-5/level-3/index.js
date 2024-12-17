// Load environment variables from the .env file
require('dotenv').config();

// Get the environment variables or use defaults
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'localhost';
const dbPath = process.env.DB_PATH || './db/default.sqlite'; // Database file path

// Log warnings for missing environment variables
if (!process.env.PORT) {
    console.warn('Warning: PORT environment variable is missing. Using default 3000.');
}

if (!process.env.DB_HOST) {
    console.warn('Warning: DB_HOST environment variable is missing. Using default localhost.');
}

if (!process.env.DB_PATH) {
    console.warn('Warning: DB_PATH environment variable is missing. Using default ./db/default.sqlite.');
}

// Simulate connecting to a database using the dbPath
console.log(`Connecting to database at: ${dbPath}`);

// Sensitive information should not be logged, but we can confirm it loaded successfully
const apiKey = process.env.API_KEY; // Sensitive information (do not log it!)
if (apiKey) {
    console.log('API key loaded successfully.');
} else {
    console.log('API key is missing.');
}

// Log the basic configuration values
console.log(`Server running on port ${port}`);
console.log(`Database host: ${dbHost}`);
