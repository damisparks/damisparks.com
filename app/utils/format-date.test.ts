import { describe, expect, it } from 'vitest'
import formatDate from './format-date'

describe('formatDate', () => {
  it('should format a valid date string correctly', () => {
    const result = formatDate('2021-01-31')
    expect(result).toBe('31 January 2021')
  })

  it('should return empty string for empty input', () => {
    const result = formatDate('')
    expect(result).toBe('')
  })

  it('should return empty string for falsy input', () => {
    const result = formatDate(null as any)
    expect(result).toBe('')
  })

  it('should format another date correctly', () => {
    const result = formatDate('2023-12-25')
    expect(result).toBe('25 December 2023')
  })
})
