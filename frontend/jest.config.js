module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,vue}", "!src/main.js"],
};
