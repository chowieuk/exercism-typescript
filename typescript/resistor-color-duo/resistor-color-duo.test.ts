import { decodedValue } from './resistor-color-duo.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10)
  })

  it('Blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68)
  })

  it('Yellow and violet', () => {
    expect(decodedValue(['yellow', 'violet'])).toEqual(47)
  })

  it('Orange and orange', () => {
    expect(decodedValue(['orange', 'orange'])).toEqual(33)
  })

  it('Ignore additional colors', () => {
    expect(decodedValue(['green', 'brown', 'orange'])).toEqual(51)
  })
})