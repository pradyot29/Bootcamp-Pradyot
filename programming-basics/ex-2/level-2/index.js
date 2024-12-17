const chalk = require('chalk');
const args = process.argv.slice(2);

const showHelp = () => {
  console.log(chalk.blue(`
  Usage:
    node index.js [--multiply] <numbers>

  Options:
    --multiply    Multiply the provided numbers
    --help        Show this help message
  `));
};

try {
  if (args.includes('--help')) {
    showHelp();
    process.exit(0);
  }

  // Check for multiply flag
  const isMultiply = args.includes('--multiply');
  const numbers = args.filter(arg => arg !== '--multiply').map((arg) => {
    const num = Number(arg);
    if (isNaN(num)) {
      throw new Error(`Invalid input: '${arg}' is not a number.`);
    }
    return num;
  });

  if (numbers.length === 0) {
    throw new Error('No numbers provided. Please pass numbers as arguments.');
  }

  // Calculate based on the flag
  const result = isMultiply
    ? numbers.reduce((acc, curr) => acc * curr, 1)
    : numbers.reduce((acc, curr) => acc + curr, 0);

  const operation = isMultiply ? 'Product' : 'Sum';
  console.log(chalk.green(`The ${operation} is: ${result}`));
} catch (error) {
  console.error(chalk.red(`Error: ${error.message}`));
  showHelp();
}
