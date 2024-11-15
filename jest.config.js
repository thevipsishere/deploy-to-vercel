module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for TypeScript and JSX transformation
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
};
