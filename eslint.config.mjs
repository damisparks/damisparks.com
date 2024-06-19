import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    files: ['*.config.js'],
    rules: {
      'no-undef': 'off'
    }
  }
]).override('nuxt/stylistic', {
  // Stylistic rules
  rules: {
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/quote-props': ['error', 'consistent'],
    '@stylistic/space-before-function-paren': ['error', 'always'],
    '@stylistic/no-tabs': 'off',
    '@stylistic/arrow-parens': ['error', 'as-needed']
  }
}).override('nuxt/vue/rules', {
  rules: {
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }]
  }
}).override('nuxt/typescript/rules', {
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true
      }
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
