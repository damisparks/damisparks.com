/**
 * A utility function for capitalizing the first letter of a string.
 * @param text - The input string to be capitalized.
 * @returns The input string with the first letter capitalized.
 * @throws {TypeError} If the input is not a string.
 */
export const capitalizeText = (text = ''): string => {
	if (typeof text !== 'string') {
		throw new TypeError('Input must be a string.')
	}

	const firstLetter = text.charAt(0).toUpperCase()
	const restOfString = text.slice(1)
	return `${firstLetter}${restOfString}`
}

/**
 * Returns an object with utility functions for working with text.
 * @returns An object with a `capitalizeText` function.
 */

export function useMe() {
	return {
		capitalizeText
	}
}
