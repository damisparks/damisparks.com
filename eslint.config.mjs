import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
	{
		rules: {
			'@stylistic/space-before-function-paren': ['error', 'always'],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-types': 'off',
			// 'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
		},
	},
	{
		files: ['*.config.js'],
		rules: {
			'no-undef': 'off',
		},
	},
	{
		/* Ignore files @see https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files */
		ignores: ['node_modules/.*'],
	},
])

// TODO => figure out how to convert this into flat config
// // @ts-check

// 'use strict'

// /** @type {import('eslint').ESLint.ConfigData}  */
// /**
//  * ESLint config.
//  * @satisfies {import("eslint").Linter.Config}
//  */

// const eslintConfig = {
// 	root: true,
// 	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],

// 	/** @see https://github.com/mdx-js/eslint-mdx/issues/251#issuecomment-736417801 */
// 	overrides: [
// 		{
// 			files: ['*.mdx', '*.md'],
// 			extends: 'plugin:mdx/recommended',
// 		},
// 	],
// }

// module.exports = eslintConfig
