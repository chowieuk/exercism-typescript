import { steps } from './collatz-conjecture.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('CollatzConjecture', () => {
  it('zero steps for one', () => {
    const expected = 0
    expect(steps(1)).toBe(expected)
  })

  it.ignore('divide if even', () => {
    const expected = 4
    expect(steps(16)).toBe(expected)
  })

  it.ignore('even and odd steps', () => {
    const expected = 9
    expect(steps(12)).toBe(expected)
  })

  it.ignore('Large number of even and odd steps', () => {
    const expected = 152
    expect(steps(1000000)).toBe(expected)
  })

  it.ignore('zero is an error', () => {
    const expected = 'Only positive numbers are allowed'
    expect(() => {
      steps(0)
    }).toThrowError(expected)
  })

  it.ignore('negative value is an error', () => {
    const expected = 'Only positive numbers are allowed'
    expect(() => {
      steps(-15)
    }).toThrowError(expected)
  })
})
