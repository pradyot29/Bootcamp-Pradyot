const debug = require('debug')('app:main');
const readline = require('readline');
const { add, divide } = require('./mathutils');
const logger = require('./logger');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

logger.info('Program started');
debug('Program started');

function askQuestion() {
    rl.question('Enter operation (add/divide) and numbers (e.g., "add 2 3"): ', (input) => {
        const [operation, a, b] = input.split(' ');
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        try {
            let result;
            if (operation === 'add') {
                result = add(num1, num2);
            } else if (operation === 'divide') {
                result = divide(num1, num2);
            } else {
                console.log('Invalid operation');
                logger.warn('Invalid operation entered');
                askQuestion();
                return;
            }

            logger.info(`Operation: ${operation}, Result: ${result}`);
            debug(`Operation: ${operation}, Result: ${result}`);
            console.log(`Result: ${result}`);
        } catch (error) {
            logger.error(`Error: ${error.message}`);
            debug(`Error: ${error.message}`);
            console.error('Error:', error.message);
        }

        askQuestion();
    });
}

askQuestion();
