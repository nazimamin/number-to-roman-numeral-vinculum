module.exports = {
  testMatch: ['<rootDir>/test/**/*spec.js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
};
