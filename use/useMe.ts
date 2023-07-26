/**
 * A utility function for capitalizing the first letter of a string.
 * @param text - The input string to be capitalized.
 * @returns The input string with the first letter capitalized.
 * @throws {TypeError} If the input is not a string.
 */
const capitalizeText = (text = ''): string => {
	if (typeof text !== 'string') {
		throw new TypeError('Input must be a string.')
	}

	const firstLetter = text.charAt(0).toUpperCase()
	const restOfString = text.slice(1)
	return `${firstLetter}${restOfString}`
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param str - The input string.
 * @returns The input string with the first letter of each word capitalized.
 * @throws {TypeError} If the input is not a string.
 */
const capitalizeWords = (str: string): string => {
	if (typeof str !== 'string') {
		throw new TypeError('Input must be a string.')
	}

	return str
		.split(' ')
		.map(word => {
			const firstLetter = word.charAt(0).toUpperCase()
			const restOfString = word.slice(1)
			return `${firstLetter}${restOfString}`
		})
		.join(' ')
}

/**
 * Generates a unique identifier string using a combination of a random number and the current date.
 * The resulting string is 13 characters long, consisting of 8 random alphanumeric characters and 5 digits of the current timestamp.
 * @returns {string} A unique identifier string.
 */
const uniqueId = (): string => {
	const randomString = Math.random().toString(36).substring(2, 10)
	const timestampString = Date.now().toString(36).substring(2)
	return `${randomString}${timestampString}`
}

/**
 * A custom composable that returns an object with utility functions for working with text and generating unique IDs.
 * @returns An object with `capitalizeText`, `capitalizeWords`, and `uniqueId` functions.
 */

export function useMe() {
	return {
		capitalizeText,
		capitalizeWords,
		uniqueId,
	}
}
