import { rotate } from './rotational-cipher.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('RotationalCipher', () => {
  it('rotate a by 1', () => {
    const result = rotate('a', 1)
    expect(result).toEqual('b')
  })

  it.ignore('rotate a by 26, same output as input', () => {
    const result = rotate('a', 26)
    expect(result).toEqual('a')
  })

  it.ignore('rotate a by 0, same output as input', () => {
    const result = rotate('a', 0)
    expect(result).toEqual('a')
  })

  it.ignore('rotate m by 13', () => {
    const result = rotate('m', 13)
    expect(result).toEqual('z')
  })

  it.ignore('rotate n by 13 with wrap around alphabet', () => {
    const result = rotate('n', 13)
    expect(result).toEqual('a')
  })

  it.ignore('rotate capital letters', () => {
    const result = rotate('OMG', 5)
    expect(result).toEqual('TRL')
  })

  it.ignore('rotate spaces', () => {
    const result = rotate('O M G', 5)
    expect(result).toEqual('T R L')
  })

  it.ignore('rotate numbers', () => {
    const result = rotate('Testing 1 2 3 testing', 4)
    expect(result).toEqual('Xiwxmrk 1 2 3 xiwxmrk')
  })

  it.ignore('rotate punctuation', () => {
    const result = rotate("Let's eat, Grandma!", 21)
    expect(result).toEqual("Gzo'n zvo, Bmviyhv!")
  })

  it.ignore('rotate all letters', () => {
    const result = rotate('The quick brown fox jumps over the lazy dog.', 13)
    expect(result).toEqual('Gur dhvpx oebja sbk whzcf bire gur ynml qbt.')
  })
})
