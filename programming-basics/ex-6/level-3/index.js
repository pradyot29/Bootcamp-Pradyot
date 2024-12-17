const config = require('config');
const fs = require('fs');
const path = require('path');

// Load the app's configuration
const appName = config.get('app.name');
const appVersion = config.get('app.version');
const appEnvironment = config.get('app.environment');
const appPort = config.get('app.port');
const logLevel = config.get('app.logLevel');
const functionsToLoad = config.get('app.functions');

// Function to dynamically load functions based on config
function loadFunctions(functions) {
  const loadedFunctions = {};
  
  functions.forEach(funcName => {
    const functionPath = path.join(__dirname, 'functions', `${funcName}.js`);
    if (fs.existsSync(functionPath)) {
      loadedFunctions[funcName] = require(functionPath);
    } else {
      console.log(`Warning: Function ${funcName} not found.`);
    }
  });

  return loadedFunctions;
}

// Load specified functions
const functions = loadFunctions(functionsToLoad);

// Configure logging based on log level
function log(message, level = 'info') {
  const levels = ['debug', 'info', 'warn', 'error'];
  const currentLevelIndex = levels.indexOf(logLevel);
  const messageLevelIndex = levels.indexOf(level);

  if (messageLevelIndex >= currentLevelIndex) {
    console.log(`[${level.toUpperCase()}] - ${message}`);
  }
}

// Logging based on environment
log(`Application: ${appName} v${appVersion} is running in ${appEnvironment} mode on port ${appPort}`, 'info');

// Example: Using dynamically loaded functions
const value = Math.PI / 4; // 45 degrees in radians
if (functions.sin) {
  console.log(`Sin(${value}) = ${functions.sin(value)}`);
}
if (functions.cos) {
  console.log(`Cos(${value}) = ${functions.cos(value)}`);
}
