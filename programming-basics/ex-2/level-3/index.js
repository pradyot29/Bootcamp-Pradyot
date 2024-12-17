#!/usr/bin/env node
const { add, multiply } = require('./mathutils');
const chalk = require('chalk');

const args = process.argv.slice(2);

try {
  if (args.length < 2) {
    throw new Error('Usage: command [add|multiply] <numbers>');
  }

  const command = args[0];
  const numbers = args.slice(1).map((arg) => {
    const num = Number(arg);
    if (isNaN(num)) throw new Error(`Invalid number: ${arg}`);
    return num;
  });

  let result;
  if (command === 'add') {
    result = add(numbers);
  } else if (command === 'multiply') {
    result = multiply(numbers);
  } else {
    throw new Error('Invalid command. Use "add" or "multiply".');
  }

  console.log(chalk.green(`Result: ${result}`));
} catch (error) {
  console.error(chalk.red(`Error: ${error.message}`));
}
