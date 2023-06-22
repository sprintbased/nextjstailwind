const nextJest = require("next/jest"); 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './src',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageReporters: ["html", "text", "text-summary", "cobertura"],  
  coverageThreshold: {    
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: 'jest-environment-jsdom'
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);