const config = require('config');

// Load the app's configuration
const appName = config.get('app.name');
const appVersion = config.get('app.version');
const appEnvironment = config.get('app.environment');
const appPort = config.get('app.port');

// Log the configuration values
console.log(`Application Name: ${appName}`);
console.log(`Application Version: ${appVersion}`);
console.log(`Application Environment: ${appEnvironment}`);
console.log(`Application Port: ${appPort}`);
