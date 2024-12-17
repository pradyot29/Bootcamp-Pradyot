// index.js
const chalk = require('chalk'); // Import chalk for styled output
const args = process.argv.slice(2); // Command-line arguments start from index 2

try {
  // Check if there are arguments
  if (args.length === 0) {
    throw new Error('No numbers provided. Please pass numbers as arguments.');
  }

  // Parse and validate numbers
  const numbers = args.map((arg) => {
    const num = Number(arg);
    if (isNaN(num)) {
      throw new Error(`Invalid input: '${arg}' is not a number.`);
    }
    return num;
  });

  // Calculate the sum
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Display the result
  console.log(chalk.green(`The sum is: ${sum}`));
} catch (error) {
  console.error(chalk.red(`Error: ${error.message}`));
}
