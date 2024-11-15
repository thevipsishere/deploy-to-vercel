module.exports = {
  testEnvironment: "jsdom", // Suitable for React testing
  transform: {
    "^.+\\.tsx?$": "ts-jest" // Use ts-jest for TypeScript support
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional for test setup
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"]
};
