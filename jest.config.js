module.exports = {
  testEnvironment: "jest-environment-jsdom", // Specify the jsdom test environment
  transform: {
    "^.+\\.tsx?$": "ts-jest" // Use ts-jest for TypeScript support
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true, // Enable coverage report
  coverageDirectory: "coverage", // Directory to store coverage output
  coverageReporters: ["json", "lcov", "text", "clover"], // Formats for coverage output
};
