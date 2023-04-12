import { score } from './scrabble-score.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Scrabble', () => {
  it('scores an empty word as zero', () => expect(score('')).toEqual(0))

  it('scores a null as zero', () => expect(score(undefined)).toEqual(0))

  it('scores a very short word', () => expect(score('a')).toEqual(1))

  it('scores the word by the number of letters', () =>
    expect(score('street')).toEqual(6))

  it('scores more complicated words with more', () =>
    expect(score('quirky')).toEqual(22))

  it('scores case insensitive words', () =>
    expect(score('OXYPHENBUTAZONE')).toEqual(41))
})
