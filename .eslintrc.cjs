// @ts-check

'use strict'

/**
 * ESLint config.
 * @satisfies {import("eslint").Linter.Config}
 */
const eslintConfig = {
	root: true,
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	overrides: [
		{
			files: ['*.mdx', '*.md'],
			extends: 'plugin:mdx/recommended',
		},
	],
}

module.exports = eslintConfig
