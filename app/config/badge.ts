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
      flat: 'text-white dark:text-zinc-300 bg-black dark:bg-white',
    },
    primary: {
      flat: 'text-white dark:text-white bg-primary-500 dark:bg-primary-500',
      subtle: 'bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25',
      soft: 'bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400',
    },
    accent: {
      flat: 'dark:text-zinc-300 bg-accent-500 dark:bg-accent-500',
      subtle: 'bg-accent-50 dark:bg-accent-400 dark:bg-opacity-10 text-accent-500 dark:text-accent-400 ring-1 ring-inset ring-accent-500 dark:ring-accent-400 ring-opacity-25 dark:ring-opacity-25',
      soft: 'bg-accent-50 dark:bg-accent-400 dark:bg-opacity-10 text-accent-500 dark:text-accent-400',
    },
  },
  variant: {
    flat: 'bg-{color} dark:bg-{color}-400 text-white dark:text-{color}-400',
    outline: 'text-{color} dark:text-{color}-400 ring-1 ring-inset ring-{color} dark:ring-{color}-400',
    subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color} dark:text-{color}-400 ring-1 ring-inset ring-{color} dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
    soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color} dark:text-{color}-400',
  },
}
