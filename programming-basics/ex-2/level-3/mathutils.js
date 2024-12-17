// mathutils.js
const add = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
const multiply = (numbers) => numbers.reduce((acc, curr) => acc * curr, 1);

module.exports = { add, multiply };
