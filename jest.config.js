export default {
  scripts: {
    test: "jest",
  },
  jest: {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
    },
  },
  testEnvironment: "node",
};
