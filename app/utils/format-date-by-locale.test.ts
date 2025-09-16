import { describe, expect, it } from 'vitest'
import formatDateByLocale from './format-date-by-locale'

describe('formatDateByLocale', () => {
  const testDate = new Date('2025-06-11T00:00:00.000Z')
  const testDateString = '2025-06-11'

  describe('with Date object input', () => {
    it('should format date with default locale (en-US)', () => {
      const result = formatDateByLocale(testDate)
      expect(result).toBe('June 11, 2025')
    })

    it('should format date with en-US locale', () => {
      const result = formatDateByLocale(testDate, 'en-US')
      expect(result).toBe('June 11, 2025')
    })

    it('should format date with en-GB locale', () => {
      const result = formatDateByLocale(testDate, 'en-GB')
      expect(result).toBe('11 June 2025')
    })

    it('should format date with de-DE locale', () => {
      const result = formatDateByLocale(testDate, 'de-DE')
      expect(result).toBe('11. Juni 2025')
    })

    it('should format date with fr-FR locale', () => {
      const result = formatDateByLocale(testDate, 'fr-FR')
      expect(result).toBe('11 juin 2025')
    })

    it('should format date with es-ES locale', () => {
      const result = formatDateByLocale(testDate, 'es-ES')
      expect(result).toBe('11 de junio de 2025')
    })
  })

  describe('with string input', () => {
    it('should format date string with default locale (en-US)', () => {
      const result = formatDateByLocale(testDateString)
      expect(result).toBe('June 11, 2025')
    })

    it('should format date string with en-GB locale', () => {
      const result = formatDateByLocale(testDateString, 'en-GB')
      expect(result).toBe('11 June 2025')
    })

    it('should format ISO date string correctly', () => {
      const isoDate = '2025-12-25T15:30:00.000Z'
      const result = formatDateByLocale(isoDate, 'en-US')
      expect(result).toBe('December 25, 2025')
    })
  })

  describe('edge cases', () => {
    it('should handle invalid date string', () => {
      const result = formatDateByLocale('invalid-date')
      expect(result).toBe('Invalid Date')
    })

    it('should handle empty string', () => {
      const result = formatDateByLocale('')
      expect(result).toBe('Invalid Date')
    })

    it('should handle undefined locale as en-US', () => {
      const result = formatDateByLocale(testDate, undefined)
      expect(result).toBe('June 11, 2025')
    })

    it('should handle null locale as en-US', () => {
      const result = formatDateByLocale(testDate, null as any)
      expect(result).toBe('June 11, 2025')
    })

    it('should handle leap year date', () => {
      const leapYearDate = new Date('2024-02-29T00:00:00.000Z')
      const result = formatDateByLocale(leapYearDate, 'en-US')
      expect(result).toBe('February 29, 2024')
    })

    it('should handle year boundaries', () => {
      const newYearDate = new Date('2025-01-01T00:00:00.000Z')
      const result = formatDateByLocale(newYearDate, 'en-US')
      expect(result).toBe('January 1, 2025')
    })
  })
})
