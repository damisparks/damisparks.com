/**
 * Format a date based on the locale
 *
 * @param dt Date object
 * @param locale Locale string
 * @returns Returns a formatted date string based on the locale
 *
 * @example
 * ```ts
 * formatDateByLocale(new Date(), 'en-US') // 'June 11, 2025'
 * ```
 */
export default function formatDateByLocale (dt: Date | string, locale?: string) {
  return new Date(dt).toLocaleDateString(locale || 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
