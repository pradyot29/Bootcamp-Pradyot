const config = require('config');

// Accessing the values from the configuration file
const appName = config.get('app.name');
const appVersion = config.get('app.version');

console.log(`Application Name: ${appName}`);
console.log(`Application Version: ${appVersion}`);
