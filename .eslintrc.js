module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  rules: {
    'no-anonymous-exports-page-templates': "warn", // Gatsby required rule
    'limited-exports-page-templates': "warn", // Gatsby required rule
    'import/no-cycle': "off", // Too slow
    'import/prefer-default-export': "off",
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname, // Enable tsconfig file to be retrieved from anywhere
  },
};
