const debug = require('debug')('app:math');

function add(a, b) {
    debug(`Adding ${a} and ${b}`);
    return a + b;
}

function divide(a, b) {
    if (b === 0) {
        debug('Attempted division by zero!');
        throw new Error('Division by zero is not allowed');
    }
    debug(`Dividing ${a} by ${b}`);
    return a / b;
}

module.exports = { add, divide };
