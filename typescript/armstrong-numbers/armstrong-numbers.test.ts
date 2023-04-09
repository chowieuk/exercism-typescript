import { isArmstrongNumber } from './armstrong-numbers.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Armstrong Numbers', () => {
  it('Single-digit numbers are Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toBeTruthy()
  })

  it.ignore('There are no two-digit Armstrong numbers', () => {
    expect(isArmstrongNumber(10)).toBeFalsy()
  })

  it.ignore('Three-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toBeTruthy()
  })

  it.ignore('Three-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toBeFalsy()
  })

  it.ignore('Four-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toBeTruthy()
  })

  it.ignore('Four-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9475)).toBeFalsy()
  })

  it.ignore('Seven-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9926315)).toBeTruthy()
  })

  it.ignore('Seven-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9926314)).toBeFalsy()
  })

  it.ignore('Armstrong number containing seven zeroes', () => {
    expect(
      isArmstrongNumber(BigInt('186709961001538790100634132976990'))
    ).toBeTruthy()
  })

  it.ignore('The largest and last Armstrong number', () => {
    expect(
      isArmstrongNumber(BigInt('115132219018763992565095597973971522401'))
    ).toBeTruthy()
  })
})
