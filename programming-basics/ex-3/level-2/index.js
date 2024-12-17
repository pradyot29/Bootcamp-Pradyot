const winston = require('winston');
const path = require('path');

// Step 1: Configure the logger with file transport and timestamps
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamps
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(), // Console transport
    new winston.transports.File({ filename: path.join(__dirname, 'logs', 'app.log') }), // File transport
  ],
});

// Step 2: Functions to demonstrate logging
function add(a, b) {
  logger.info('Addition operation started');
  return a + b;
}

function divide(a, b) {
  logger.info('Division operation started');
  if (b === 0) {
    logger.error('Fatal error: Division by zero!');
    return 'Error: Division by zero';
  }
  return a / b;
}

// Step 3: Log program events
logger.info('Program started');

// Test operations
const sum = add(5, 3);
logger.info(`Operation successful: Sum = ${sum}`);

const result1 = divide(10, 2);
logger.info(`Operation successful: Result = ${result1}`);

const result2 = divide(10, 0); // Logs an error
logger.warn('Program encountered an error, but continued execution');

logger.info('Program completed');
