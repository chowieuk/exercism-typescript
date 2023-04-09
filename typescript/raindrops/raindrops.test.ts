import { convert } from './raindrops.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Raindrops', () => {
  it('converts 1', () => expect(convert(1)).toEqual('1'))

  it.ignore('converts 3', () => expect(convert(3)).toEqual('Pling'))

  it.ignore('converts 5', () => expect(convert(5)).toEqual('Plang'))

  it.ignore('converts 7', () => expect(convert(7)).toEqual('Plong'))

  it.ignore('converts 6', () => expect(convert(6)).toEqual('Pling'))

  it.ignore('converts 9', () => expect(convert(9)).toEqual('Pling'))

  it.ignore('converts 10', () => expect(convert(10)).toEqual('Plang'))

  it.ignore('converts 14', () => expect(convert(14)).toEqual('Plong'))

  it.ignore('converts 15', () => expect(convert(15)).toEqual('PlingPlang'))

  it.ignore('converts 21', () => expect(convert(21)).toEqual('PlingPlong'))

  it.ignore('converts 25', () => expect(convert(25)).toEqual('Plang'))

  it.ignore('converts 35', () => expect(convert(35)).toEqual('PlangPlong'))

  it.ignore('converts 49', () => expect(convert(49)).toEqual('Plong'))

  it.ignore('converts 52', () => expect(convert(52)).toEqual('52'))

  it.ignore('converts 105', () => expect(convert(105)).toEqual('PlingPlangPlong'))

  it.ignore('converts 12121', () => expect(convert(12121)).toEqual('12121'))
})
