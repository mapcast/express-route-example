module.exports = {
  "parser": '@babel/eslint-parser',
  "parserOptions": {
    "requireConfigFile": false
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
  ],
};
