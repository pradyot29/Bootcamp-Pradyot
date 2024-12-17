const winston = require('winston');

// Step 1: Configure the logger
const logger = winston.createLogger({
  level: 'info', // Default level
  transports: [
    new winston.transports.Console(), // Console transport for output
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
