require('dotenv').config();

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'localhost';

console.log(`Server running on port ${port}`);
console.log(`Database host: ${dbHost}`);
