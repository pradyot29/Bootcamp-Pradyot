const debugMain = require('debug')('app:main');
const { add, divide } = require('./mathutils');

debugMain('Program started');

try {
    const sum = add(4, 7);
    console.log(`Sum: ${sum}`);

    const quotient = divide(10, 2);
    console.log(`Quotient: ${quotient}`);

    const errorQuotient = divide(10, 0);
    console.log(`Error Quotient: ${errorQuotient}`);
} catch (error) {
    console.error('Error:', error.message);
}

debugMain('Program finished');
