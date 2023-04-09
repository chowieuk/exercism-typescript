import { isIsogram } from './isogram.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Check if the given string is an isogram', () => {
  it('empty string', () => {
    const expected = true
    expect(isIsogram('')).toEqual(expected)
  })

  it.ignore('isogram with only lower case characters', () => {
    const expected = true
    expect(isIsogram('isogram')).toEqual(expected)
  })

  it.ignore('word with one duplicated character', () => {
    const expected = false
    expect(isIsogram('eleven')).toEqual(expected)
  })

  it.ignore('longest reported english isogram', () => {
    const expected = true
    expect(isIsogram('subdermatoglyphic')).toEqual(expected)
  })

  it.ignore('word with duplicated character in mixed case', () => {
    const expected = false
    expect(isIsogram('Alphabet')).toEqual(expected)
  })

  it.ignore('hypothetical isogrammic word with hyphen', () => {
    const expected = true
    expect(isIsogram('thumbscrew-japingly')).toEqual(expected)
  })

  it.ignore('isogram with duplicated hyphen', () => {
    const expected = true
    expect(isIsogram('six-year-old')).toEqual(expected)
  })

  it.ignore('made-up name that is an isogram', () => {
    const expected = true
    expect(isIsogram('Emily Jung Schwartzkopf')).toEqual(expected)
  })

  it.ignore('duplicated character in the middle', () => {
    const expected = false
    expect(isIsogram('accentor')).toEqual(expected)
  })
})
