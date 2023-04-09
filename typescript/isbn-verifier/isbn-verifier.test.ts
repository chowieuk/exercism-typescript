import { isValid } from './isbn-verifier.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('ISBN Verifier', () => {
  it('valid isbn', () => {
    expect(isValid('3-598-21508-8')).toBeTruthy()
  })

  it.ignore('invalid isbn check digit', () => {
    expect(isValid('3-598-21508-9')).toBeFalsy()
  })

  it.ignore('valid isbn with a check digit of 10', () => {
    expect(isValid('3-598-21507-X')).toBeTruthy()
  })

  it.ignore('check digit is a character other than X', () => {
    expect(isValid('3-598-21507-A')).toBeFalsy()
  })

  it.ignore('invalid check digit in isbn is not treated as zero', () => {
    expect(isValid('4-598-21507-B')).toBeFalsy()
  })

  it.ignore('invalid character in isbn is not treated as zero', () => {
    expect(isValid('3-598-2K507-0')).toBeFalsy()
  })

  it.ignore('X is only valid as a check digit', () => {
    expect(isValid('3-598-2X507-9')).toBeFalsy()
  })

  it.ignore('valid isbn without separating dashes', () => {
    expect(isValid('3598215088')).toBeTruthy()
  })

  it.ignore('isbn without separating dashes and X as check digit', () => {
    expect(isValid('359821507X')).toBeTruthy()
  })

  it.ignore('isbn without check digit and dashes', () => {
    expect(isValid('359821507')).toBeFalsy()
  })

  it.ignore('too long isbn', () => {
    expect(isValid('3-598-21507-XX')).toBeFalsy()
  })

  it.ignore('too long isbn and no dashes', () => {
    expect(isValid('3598215078X')).toBeFalsy()
  })

  it.ignore('too short isbn', () => {
    expect(isValid('00')).toBeFalsy()
  })

  it.ignore('isbn without check digit', () => {
    expect(isValid('3-598-21507')).toBeFalsy()
  })

  it.ignore('check digit of X should not be used for 0', () => {
    expect(isValid('3-598-21515-X')).toBeFalsy()
  })

  it.ignore('empty isbn', () => {
    expect(isValid('')).toBeFalsy()
  })

  it.ignore('input is 9 characters', () => {
    expect(isValid('134456729')).toBeFalsy()
  })

  it.ignore('invalid characters are not ignored after checking length', () => {
    expect(isValid('3132P34035')).toBeFalsy()
  })

  it.ignore('invalid characters are not ignored before checking length', () => {
    expect(isValid('3598P215088')).toBeFalsy()
  })

  it.ignore('input is too long but contains a valid isbn', () => {
    expect(isValid('98245726788')).toBeFalsy()
  })
})
