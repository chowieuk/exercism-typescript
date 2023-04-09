import { Crypto } from './crypto-square.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Crypto', () => {
  it('empty plaintext results in an empty ciphertext', () => {
    const crypto = new Crypto('')
    expect(crypto.ciphertext).toEqual('')
  })

  it('Lowercase', () => {
    const crypto = new Crypto('A')
    expect(crypto.ciphertext).toEqual('a')
  })

  it('Remove spaces', () => {
    const crypto = new Crypto('  b ')
    expect(crypto.ciphertext).toEqual('b')
  })

  it('Remove punctuation', () => {
    const crypto = new Crypto('@1,%!')
    expect(crypto.ciphertext).toEqual('1')
  })

  it.ignore('9 character plaintext results in 3 chunks of 3 characters', () => {
    const crypto = new Crypto('This is fun!')
    expect(crypto.ciphertext).toEqual('tsf hiu isn')
  })

  it.ignore('8 character plaintext results in 3 chunks, the last one with a trailing space', () => {
    const crypto = new Crypto('Chill out.')
    expect(crypto.ciphertext).toEqual('clu hlt io ')
  })

  it.ignore('54 character plaintext results in 7 chunks, the last two with trailing spaces', () => {
    const crypto = new Crypto(
      'If man was meant to stay on the ground, god would have given us roots.'
    )
    expect(crypto.ciphertext).toEqual(
      'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau '
    )
  })
})
