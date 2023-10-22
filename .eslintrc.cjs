// @ts-check

'use strict'

/**
 * ESLint config.
 * @satisfies {import("eslint").Linter.Config}
 */

const eslintConfig = {
	root: true,
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	// plugin: ['prettier']
}

module.exports = eslintConfig
