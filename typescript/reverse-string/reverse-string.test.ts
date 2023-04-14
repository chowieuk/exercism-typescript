import { reverse } from './reverse-string.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Reverse String', () => {
  it('an empty string', () => {
    const expected = ''
    expect(reverse('')).toEqual(expected)
  })

  it('a word', () => {
    const expected = 'tobor'
    expect(reverse('robot')).toEqual(expected)
  })

  it('a capitalized word', () => {
    const expected = 'nemaR'
    expect(reverse('Ramen')).toEqual(expected)
  })

  it('a sentence with punctuation', () => {
    const expected = `!yrgnuh m'I`
    expect(reverse(`I'm hungry!`)).toEqual(expected)
  })

  it('a palindrome', () => {
    const expected = 'racecar'
    expect(reverse('racecar')).toEqual(expected)
  })
})
