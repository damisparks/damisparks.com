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
