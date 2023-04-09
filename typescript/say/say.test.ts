import { sayInEnglish } from './say.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('say', () => {
  it('zero', () => {
    expect(sayInEnglish(0)).toBe('zero')
  })

  it.ignore('one', () => {
    expect(sayInEnglish(1)).toBe('one')
  })

  it.ignore('fourteen', () => {
    expect(sayInEnglish(14)).toBe('fourteen')
  })

  it.ignore('twenty', () => {
    expect(sayInEnglish(20)).toBe('twenty')
  })

  it.ignore('twenty-two', () => {
    expect(sayInEnglish(22)).toBe('twenty-two')
  })

  it.ignore('thirty', () => {
    expect(sayInEnglish(30)).toBe('thirty')
  })

  it.ignore('ninety-nine', () => {
    expect(sayInEnglish(99)).toBe('ninety-nine')
  })

  it.ignore('one hundred', () => {
    expect(sayInEnglish(100)).toBe('one hundred')
  })

  it.ignore('one hundred twenty-three', () => {
    expect(sayInEnglish(123)).toBe('one hundred twenty-three')
  })

  it.ignore('two hundred', () => {
    expect(sayInEnglish(200)).toBe('two hundred')
  })

  it.ignore('nine hundred ninety-nine', () => {
    expect(sayInEnglish(999)).toBe('nine hundred ninety-nine')
  })

  it.ignore('one thousand', () => {
    expect(sayInEnglish(1000)).toBe('one thousand')
  })

  it.ignore('one thousand two hundred thirty-four', () => {
    expect(sayInEnglish(1234)).toBe('one thousand two hundred thirty-four')
  })

  it.ignore('one million', () => {
    expect(sayInEnglish(1000000)).toBe('one million')
  })

  it.ignore('one million two', () => {
    expect(sayInEnglish(1000002)).toBe('one million two')
  })

  it.ignore('one million two thousand three hundred forty-five', () => {
    expect(sayInEnglish(1002345)).toBe(
      'one million two thousand three hundred forty-five'
    )
  })

  it.ignore('one billion', () => {
    expect(sayInEnglish(1000000000)).toBe('one billion')
  })

  it.ignore('a really big number', () => {
    let expected = 'nine hundred eighty-seven billion '
    expected += 'six hundred fifty-four million '
    expected += 'three hundred twenty-one thousand '
    expected += 'one hundred twenty-three'
    expect(sayInEnglish(987654321123)).toBe(expected)
  })

  it.ignore('raises an error below zero', () => {
    expect(() => {
      sayInEnglish(-1)
    }).toThrowError('Number must be between 0 and 999,999,999,999.')
  })

  it.ignore('raises an error above 999,999,999,999', () => {
    expect(() => {
      sayInEnglish(1000000000000)
    }).toThrowError('Number must be between 0 and 999,999,999,999.')
  })
})
