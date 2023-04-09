import { toRoman } from './roman-numerals.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('toRoman()', () => {
  it('converts 1', () => expect(toRoman(1)).toEqual('I'))
  it.ignore('converts 2', () => expect(toRoman(2)).toEqual('II'))
  it.ignore('converts 3', () => expect(toRoman(3)).toEqual('III'))
  it.ignore('converts 4', () => expect(toRoman(4)).toEqual('IV'))
  it.ignore('converts 5', () => expect(toRoman(5)).toEqual('V'))
  it.ignore('converts 6', () => expect(toRoman(6)).toEqual('VI'))
  it.ignore('converts 9', () => expect(toRoman(9)).toEqual('IX'))
  it.ignore('converts 16', () => expect(toRoman(16)).toEqual('XVI'))
  it.ignore('converts 27', () => expect(toRoman(27)).toEqual('XXVII'))
  it.ignore('converts 48', () => expect(toRoman(48)).toEqual('XLVIII'))
  it.ignore('converts 49', () => expect(toRoman(49)).toEqual('XLIX'))
  it.ignore('converts 59', () => expect(toRoman(59)).toEqual('LIX'))
  it.ignore('converts 66', () => expect(toRoman(66)).toEqual('LXVI'))
  it.ignore('converts 93', () => expect(toRoman(93)).toEqual('XCIII'))
  it.ignore('converts 141', () => expect(toRoman(141)).toEqual('CXLI'))
  it.ignore('converts 163', () => expect(toRoman(163)).toEqual('CLXIII'))
  it.ignore('converts 166', () => expect(toRoman(166)).toEqual('CLXVI'))
  it.ignore('converts 402', () => expect(toRoman(402)).toEqual('CDII'))
  it.ignore('converts 575', () => expect(toRoman(575)).toEqual('DLXXV'))
  it.ignore('converts 666', () => expect(toRoman(666)).toEqual('DCLXVI'))
  it.ignore('converts 911', () => expect(toRoman(911)).toEqual('CMXI'))
  it.ignore('converts 1024', () => expect(toRoman(1024)).toEqual('MXXIV'))
  it.ignore('converts 1666', () => expect(toRoman(1666)).toEqual('MDCLXVI'))
  it.ignore('converts 3000', () => expect(toRoman(3000)).toEqual('MMM'))
  it.ignore('converts 3001', () => expect(toRoman(3001)).toEqual('MMMI'))
  it.ignore('converts 3999', () => expect(toRoman(3999)).toEqual('MMMCMXCIX'))
})
