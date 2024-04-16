/**
 * Badge UI style configuration
 */
export default {
	base: 'inline-flex items-center',
	rounded: 'rounded-md',
	font: 'caption',
	size: {
		xs: 'text-xs px-1.5 py-0.5',
		sm: 'text-xs px-2 py-1',
		md: 'text-sm px-2 py-1',
		lg: 'text-sm px-2.5 py-1.5',
	},
	color: {
		black: {
			flat: 'text-white dark:text-color bg-black dark:bg-white',
		},
		primary: {
			flat: 'text-white dark:text-white bg-primary dark:bg-primary',
			subtle:
				'bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary dark:text-primary-400 ring-1 ring-inset ring-primary dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25',
			soft: 'bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary dark:text-primary-400',
		},
		accent: {
			flat: 'text-color dark:text-color bg-accent dark:bg-accent',
			subtle:
				'bg-accent-50 dark:bg-accent-400 dark:bg-opacity-10 text-accent-500 dark:text-accent-400 ring-1 ring-inset ring-accent dark:ring-accent-400 ring-opacity-25 dark:ring-opacity-25',
			soft: 'bg-accent-50 dark:bg-accent-400 dark:bg-opacity-10 text-accent-500 dark:text-accent-400',
		},
	},
	variant: {
		flat: 'bg-{color} dark:bg-{color}-400 text-white dark:text-{color}-400',
		outline:
			'text-{color} dark:text-{color}-400 ring-1 ring-inset ring-{color} dark:ring-{color}-400',
		subtle:
			'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color} dark:text-{color}-400 ring-1 ring-inset ring-{color} dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
		soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color} dark:text-{color}-400',
	},
}
