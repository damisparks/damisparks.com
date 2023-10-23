// @ts-check

'use strict'

/** @type {import('eslint').ESLint.ConfigData}  */
/**
 * ESLint config.
 * @satisfies {import("eslint").Linter.Config}
 */

const eslintConfig = {
	root: true,
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],

	/** @see https://github.com/mdx-js/eslint-mdx/issues/251#issuecomment-736417801 */
	overrides: [
		{
			files: ['*.mdx', '*.md'],
			extends: 'plugin:mdx/recommended',
		},
	],
}

module.exports = eslintConfig
