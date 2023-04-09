import { largestProduct } from './largest-series-product.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Largest Series Product', () => {
  it('finds the largest product if span equals length', () => {
    expect(largestProduct('29', 2)).toEqual(18)
  })

  it.ignore('can find the largest product of 2 with numbers in order', () => {
    expect(largestProduct('0123456789', 2)).toEqual(72)
  })

  it.ignore('can find the largest product of 2', () => {
    expect(largestProduct('576802143', 2)).toEqual(48)
  })

  it.ignore('can find the largest product of 3 with numbers in order', () => {
    expect(largestProduct('0123456789', 3)).toEqual(504)
  })

  it.ignore('can find the largest product of 3', () => {
    expect(largestProduct('1027839564', 3)).toEqual(270)
  })

  it.ignore('can find the largest product of 5 with numbers in order', () => {
    expect(largestProduct('0123456789', 5)).toEqual(15120)
  })

  it.ignore('can get the largest product of a big number', () => {
    expect(
      largestProduct('73167176531330624919225119674426574742355349194934', 6)
    ).toEqual(23520)
  })

  it.ignore('reports zero if the only digits are zero', () => {
    expect(largestProduct('0000', 2)).toEqual(0)
  })

  it.ignore('reports zero if all spans include zero', () => {
    expect(largestProduct('99099', 3)).toEqual(0)
  })

  it.ignore('rejects span longer than string length', () => {
    expect(() => largestProduct('123', 4)).toThrow(
      new Error('Span must be smaller than string length')
    )
  })

  it.ignore('reports 1 for empty string and empty product (0 span)', () => {
    expect(largestProduct('', 0)).toEqual(1)
  })

  it.ignore('reports 1 for nonempty string and empty product (0 span)', () => {
    expect(largestProduct('123', 0)).toEqual(1)
  })

  it.ignore('rejects empty string and nonzero span', () => {
    expect(() => largestProduct('', 1)).toThrow(
      new Error('Span must be smaller than string length')
    )
  })

  it.ignore('rejects invalid character in digits', () => {
    expect(() => largestProduct('1234a5', 2)).toThrow(
      new Error('Digits input must only contain digits')
    )
  })

  it.ignore('rejects negative span', () => {
    expect(() => largestProduct('12345', -1)).toThrow(
      new Error('Span must not be negative')
    )
  })
})
