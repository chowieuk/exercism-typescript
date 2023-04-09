import { compute } from './hamming.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Hamming', () => {
  it('empty strands', () => {
    expect(compute('', '')).toEqual(0)
  })

  it.ignore('single letter identical strands', () => {
    expect(compute('A', 'A')).toEqual(0)
  })

  it.ignore('single letter different strands', () => {
    expect(compute('G', 'T')).toEqual(1)
  })

  it.ignore('long identical strands', () => {
    expect(compute('GGACTGAAATCTG', 'GGACTGAAATCTG')).toEqual(0)
  })

  it.ignore('long different strands', () => {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9)
  })

  it.ignore('disallow first strand longer', () => {
    expect(() => {
      compute('AATG', 'AAA')
    }).toThrowError('DNA strands must be of equal length.')
  })

  it.ignore('disallow second strand longer', () => {
    expect(() => {
      compute('ATA', 'AGTG')
    }).toThrowError('DNA strands must be of equal length.')
  })

  it.ignore('disallow empty first strand', () => {
    expect(() => {
      compute('', 'G')
    }).toThrowError('DNA strands must be of equal length.')
  })

  it.ignore('disallow empty second strand', () => {
    expect(() => {
      compute('G', '')
    }).toThrowError('DNA strands must be of equal length.')
  })
})
