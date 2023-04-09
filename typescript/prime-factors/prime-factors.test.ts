import { calculatePrimeFactors } from './prime-factors.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('calculatePrimeFactors', () => {
  it('returns an empty array for 1', () =>
    expect(calculatePrimeFactors(1)).toEqual([]))

  it.ignore('factors 2', () => expect(calculatePrimeFactors(2)).toEqual([2]))

  it.ignore('factors 3', () => expect(calculatePrimeFactors(3)).toEqual([3]))

  it.ignore('factors 4', () => expect(calculatePrimeFactors(4)).toEqual([2, 2]))

  it.ignore('factors 6', () => expect(calculatePrimeFactors(6)).toEqual([2, 3]))

  it.ignore('factors 8', () => expect(calculatePrimeFactors(8)).toEqual([2, 2, 2]))

  it.ignore('factors 9', () => expect(calculatePrimeFactors(9)).toEqual([3, 3]))

  it.ignore('factors 12', () => expect(calculatePrimeFactors(12)).toEqual([2, 2, 3]))

  it.ignore('factors 27', () => expect(calculatePrimeFactors(27)).toEqual([3, 3, 3]))

  it.ignore('factors 625', () =>
    expect(calculatePrimeFactors(625)).toEqual([5, 5, 5, 5]))

  it.ignore('factors 901255', () =>
    expect(calculatePrimeFactors(901255)).toEqual([5, 17, 23, 461]))

  it.ignore('factors 93819012551', () =>
    expect(calculatePrimeFactors(93819012551)).toEqual([11, 9539, 894119]))
})
