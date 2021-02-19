const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  verbose: true,
};
