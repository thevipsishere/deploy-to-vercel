module.exports = {
  testEnvironment: "jest-environment-jsdom", // Use jsdom for React tests
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest to transform TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognize these file extensions
  collectCoverage: true, // Enable coverage report
  coverageDirectory: "coverage", // Directory for coverage output
  coverageReporters: ["json", "lcov", "text", "clover"], // Formats for coverage output
};
