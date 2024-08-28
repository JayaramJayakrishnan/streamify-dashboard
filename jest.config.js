module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/',  // Add exceptions here for modules that need to be transpiled
    ],
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
  };
  