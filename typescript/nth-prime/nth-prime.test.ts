import { nth } from './nth-prime.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Prime', () => {
  it('first', () => {
    expect(nth(1)).toEqual(2)
  })

  it.ignore('second', () => {
    expect(nth(2)).toEqual(3)
  })

  it.ignore('sixth', () => {
    expect(nth(6)).toEqual(13)
  })

  it.ignore('big prime', () => {
    expect(nth(10001)).toEqual(104743)
  })

  it.ignore('weird case', () => {
    expect(() => nth(0)).toThrowError('Prime is not possible')
  })
})
