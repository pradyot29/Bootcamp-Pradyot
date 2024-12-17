const debug = require('debug')('app:main');

debug('Program started');

// Sample function
function sum(a, b) {
    debug(`Calculating sum of ${a} and ${b}`);
    return a + b;
}

const result = sum(3, 5);
console.log(`Result: ${result}`);

debug('Program finished');
