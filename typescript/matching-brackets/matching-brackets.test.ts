import { isPaired } from './matching-brackets.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Matching Brackets', () => {
  it('paired square brackets', () => {
    expect(isPaired('[]')).toEqual(true)
  })

  it.ignore('empty string', () => {
    expect(isPaired('')).toEqual(true)
  })

  it.ignore('unpaired brackets', () => {
    expect(isPaired('[[')).toEqual(false)
  })

  it.ignore('wrong ordered brackets', () => {
    expect(isPaired('}{')).toEqual(false)
  })

  it.ignore('wrong closing bracket', () => {
    expect(isPaired('{]')).toEqual(false)
  })

  it.ignore('paired with whitespace', () => {
    expect(isPaired('{ }')).toEqual(true)
  })

  it.ignore('partially paired brackets', () => {
    expect(isPaired('{[])')).toEqual(false)
  })

  it.ignore('simple nested brackets', () => {
    expect(isPaired('{[]}')).toEqual(true)
  })

  it.ignore('several paired brackets', () => {
    expect(isPaired('{}[]')).toEqual(true)
  })

  it.ignore('paired and nested brackets', () => {
    expect(isPaired('([{}({}[])])')).toEqual(true)
  })

  it.ignore('unopened closing brackets', () => {
    expect(isPaired('{[)][]}')).toEqual(false)
  })

  it.ignore('unpaired and nested brackets', () => {
    expect(isPaired('([{])')).toEqual(false)
  })

  it.ignore('paired and wrong nested brackets', () => {
    expect(isPaired('[({]})')).toEqual(false)
  })

  it.ignore('paired and incomplete brackets', () => {
    expect(isPaired('{}[')).toEqual(false)
  })

  it.ignore('too many closing brackets', () => {
    expect(isPaired('[]]')).toEqual(false)
  })

  it.ignore('math expression', () => {
    expect(isPaired('(((185 + 223.85) * 15) - 543)/2')).toEqual(true)
  })

  it.ignore('complex latex expression', () => {
    expect(
      isPaired(
        '\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'
      )
    ).toEqual(true)
  })
})
