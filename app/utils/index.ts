/**
 * Format a date based on the locale
 * @param dt Date object
 * @param locale Locale string
 * @returns Returns a formatted date string based on the locale
 */
export const formatDateByLocale = (dt: Date, locale: string) => {
  return new Date(dt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Formats a given date string into the format "Mon DD, YYYY".
 * @param date - The input date string in ISO format (e.g., "2021-01-31").
 * @returns A formatted date string in the format "Mon DD, YYYY", or an empty string if the input date is falsy.
 */
export const formdateDate = (date: string) => {
  if (!date) {
    throw new Error('Invalid date format')
  }
  const d = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Intl.DateTimeFormat('en-GB', options).format(d)
}
