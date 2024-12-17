// Load environment variables from the .env file
require('dotenv').config();

// Get the environment variables or use defaults
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'localhost';

// Log warnings for missing environment variables
if (!process.env.PORT) {
    console.warn('Warning: PORT environment variable is missing. Using default 3000.');
}

if (!process.env.DB_HOST) {
    console.warn('Warning: DB_HOST environment variable is missing. Using default localhost.');
}

// Log the values to the console
console.log(`Server running on port ${port}`);
console.log(`Database host: ${dbHost}`);
