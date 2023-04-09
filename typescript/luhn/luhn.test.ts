import { valid } from './luhn.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Luhn', () => {
  it('single digit strings can not be valid', () => {
    expect(valid('1')).toBeFalsy()
  })

  it.ignore('a single zero is invalid', () => {
    expect(valid('0')).toBeFalsy()
  })

  it.ignore('a simple valid SIN that remains valid if reversed', () => {
    expect(valid('059')).toBeTruthy()
  })

  it.ignore('a simple valid SIN that becomes invalid if reversed', () => {
    expect(valid('59')).toBeTruthy()
  })

  it.ignore('a valid Canadian SIN', () => {
    expect(valid('055 444 285')).toBeTruthy()
  })

  it.ignore('invalid Canadian SIN', () => {
    expect(valid('055 444 286')).toBeFalsy()
  })

  it.ignore('invalid credit card', () => {
    expect(valid('8273 1232 7352 0569')).toBeFalsy()
  })

  it.ignore('invalid long number with an even remainder', () => {
    expect(valid('1 2345 6789 1234 5678 9012')).toBeFalsy()
  })

  it.ignore('invalid long number with a remainder divisible by 5', () => {
    expect(valid('1 2345 6789 1234 5678 9013')).toBeFalsy()
  })

  it.ignore('valid number with an even number of digits', () => {
    expect(valid('095 245 88')).toBeTruthy()
  })

  it.ignore('valid number with an odd number of spaces', () => {
    expect(valid('234 567 891 234')).toBeTruthy()
  })

  it.ignore('valid strings with a non-digit added at the end become invalid', () => {
    expect(valid('059a')).toBeFalsy()
  })

  it.ignore('valid strings with punctuation included become invalid', () => {
    expect(valid('055-444-285')).toBeFalsy()
  })

  it.ignore('valid strings with symbols included become invalid', () => {
    expect(valid('055# 444$ 285')).toBeFalsy()
  })

  it.ignore('single zero with space is invalid', () => {
    expect(valid(' 0')).toBeFalsy()
  })

  it.ignore('more than a single zero is valid', () => {
    expect(valid('0000 0')).toBeTruthy()
  })

  it.ignore('input digit 9 is correctly converted to output digit 9', () => {
    expect(valid('091')).toBeTruthy()
  })

  it.ignore('very long input is valid', () => {
    expect(valid('9999999999 9999999999 9999999999 9999999999')).toBeTruthy()
  })

  it.ignore('valid luhn with an odd number of digits and non zero first digit', () => {
    expect(valid('109')).toBeTruthy()
  })

  it.ignore("using ascii value for non-doubled non-digit isn't allowed", () => {
    expect(valid('055b 444 285')).toBeFalsy()
  })

  it.ignore("using ascii value for doubled non-digit isn't allowed", () => {
    expect(valid(':9')).toBeFalsy()
  })

  it.ignore("non-numeric, non-space char in the middle with a sum that's divisible by 10 isn't allowed", () => {
    expect(valid('59%59')).toBeFalsy()
  })
})
