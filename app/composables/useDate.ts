/**
 * Formats a given date string into the format "Mon DD, YYYY".
 * @param date - The input date string in ISO format (e.g., "2021-01-31").
 * @returns A formatted date string in the format "Mon DD, YYYY", or an empty string if the input date is falsy.
 */
const formdateDate = (date: string) => {
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

export function useDate () {
  return { formdateDate }
}
