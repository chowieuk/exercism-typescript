import { SimpleCipher } from './simple-cipher.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Random key generation', () => {
  it.ignore('generates keys at random', () => {
    // Strictly speaking, this is difficult to test with 100% certainty.
    // But, if you have a generator that generates 100-character-long
    // strings of lowercase letters at random, the odds of two consecutively
    // generated keys being identical are astronomically low.
    expect(new SimpleCipher().key).not.toEqual(new SimpleCipher().key)
  })
})

describe('Random key cipher', () => {
  const simpleCipher = new SimpleCipher()

  it('has a key made of letters', () => {
    expect(simpleCipher.key).toMatch(/^[a-z]+$/)
  })

  it.ignore('has a key that is at least 100 characters long', () => {
    expect(simpleCipher.key.length).toBeGreaterThanOrEqual(100)
  })

  // Here we take advantage of the fact that plaintext of "aaa..."
  // outputs the key. This is a critical problem with shift ciphers, some
  // characters will always output the key verbatim.
  it.ignore('can encode', () => {
    expect(simpleCipher.encode('aaaaaaaaaa')).toEqual(
      simpleCipher.key.substring(0, 10)
    )
  })

  it.ignore('can decode', () => {
    expect(simpleCipher.decode(simpleCipher.key.substring(0, 10))).toEqual(
      'aaaaaaaaaa'
    )
  })

  it.ignore('is reversible', () => {
    const plaintext = 'abcdefghij'
    expect(simpleCipher.decode(simpleCipher.encode(plaintext))).toEqual(
      plaintext
    )
  })
})

describe('Substitution cipher', () => {
  const key = 'abcdefghij'
  const simpleCipher = new SimpleCipher(key)

  it.ignore('keeps the submitted key', () => {
    expect(simpleCipher.key).toEqual(key)
  })

  it.ignore('can encode', () => {
    expect(simpleCipher.encode('aaaaaaaaaa')).toEqual('abcdefghij')
  })

  it.ignore('can decode', () => {
    expect(simpleCipher.decode('abcdefghij')).toEqual('aaaaaaaaaa')
  })

  it.ignore('is reversible', () => {
    expect(simpleCipher.decode(simpleCipher.encode('abcdefghij'))).toEqual(
      'abcdefghij'
    )
  })

  it.ignore(': double shift encode', () => {
    expect(new SimpleCipher('iamapandabear').encode('iamapandabear')).toEqual(
      'qayaeaagaciai'
    )
  })

  it.ignore('can wrap on encode', () => {
    expect(simpleCipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi')
  })

  it.ignore('can wrap on decode', () => {
    expect(simpleCipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz')
  })

  it.ignore('can encode messages longer than the key"', () => {
    expect(new SimpleCipher('abc').encode('iamapandabear')).toEqual(
      'iboaqcnecbfcr'
    )
  })

  it.ignore('can decode messages longer than the key', () => {
    expect(new SimpleCipher('abc').decode('iboaqcnecbfcr')).toEqual(
      'iamapandabear'
    )
  })
})
