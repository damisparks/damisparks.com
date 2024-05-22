import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      // '@stylistic/no-tabs': 'off',
      // 'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    },
  },
  {
    files: ['*.config.js'],
    rules: {
      'no-undef': 'off',
    },
  },
])
