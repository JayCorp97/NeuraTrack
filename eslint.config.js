// eslint.config.js (CommonJS)
const js = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
