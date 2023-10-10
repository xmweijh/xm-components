module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['@jsxiaosi/eslint-config-vue', 'plugin:prettier/recommended'],
  rules: {
    'vue/no-v-text-v-html-on-component': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true,
      },
    ],
  },
};
