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
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true,
      },
    ],
  },
};
