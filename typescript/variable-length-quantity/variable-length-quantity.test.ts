import { encode, decode } from './variable-length-quantity.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('VariableLengthQuantity', () => {
  describe('Encode a series of integers, producing a series of bytes.', () => {
    it('zero', () => {
      expect(encode([0])).toEqual([0])
    })

    it.ignore('arbitrary single byte', () => {
      expect(encode([0x40])).toEqual([0x40])
    })

    it.ignore('largest single byte', () => {
      expect(encode([0x7f])).toEqual([0x7f])
    })

    it.ignore('smallest double byte', () => {
      expect(encode([0x80])).toEqual([0x81, 0])
    })

    it.ignore('arbitrary double byte', () => {
      expect(encode([0x2000])).toEqual([0xc0, 0])
    })

    it.ignore('largest double byte', () => {
      expect(encode([0x3fff])).toEqual([0xff, 0x7f])
    })

    it.ignore('smallest triple byte', () => {
      expect(encode([0x4000])).toEqual([0x81, 0x80, 0])
    })

    it.ignore('arbitrary triple byte', () => {
      expect(encode([0x100000])).toEqual([0xc0, 0x80, 0])
    })

    it.ignore('largest triple byte', () => {
      expect(encode([0x1fffff])).toEqual([0xff, 0xff, 0x7f])
    })

    it.ignore('smallest quadruple byte', () => {
      expect(encode([0x200000])).toEqual([0x81, 0x80, 0x80, 0])
    })

    it.ignore('arbitrary quadruple byte', () => {
      expect(encode([0x8000000])).toEqual([0xc0, 0x80, 0x80, 0])
    })

    it.ignore('largest quadruple byte', () => {
      expect(encode([0xfffffff])).toEqual([0xff, 0xff, 0xff, 0x7f])
    })

    it.ignore('smallest quintuple byte', () => {
      expect(encode([0x10000000])).toEqual([0x81, 0x80, 0x80, 0x80, 0])
    })

    it.ignore('arbitrary quintuple byte', () => {
      expect(encode([0xff000000])).toEqual([0x8f, 0xf8, 0x80, 0x80, 0])
    })

    it.ignore('maximum 32-bit integer input', () => {
      expect(encode([0xffffffff])).toEqual([0x8f, 0xff, 0xff, 0xff, 0x7f])
    })

    it.ignore('two single-byte values', () => {
      expect(encode([0x40, 0x7f])).toEqual([0x40, 0x7f])
    })

    it.ignore('two multi-byte values', () => {
      expect(encode([0x4000, 0x123456])).toEqual([
        0x81, 0x80, 0, 0xc8, 0xe8, 0x56,
      ])
    })

    it.ignore('many multi-byte values', () => {
      const input = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000]
      const expected = [
        0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81,
        0x80, 0,
      ]
      expect(encode(input)).toEqual(expected)
    })
  })

  describe('Decode a series of bytes, producing a series of integers.', () => {
    it.ignore('one byte', () => {
      expect(decode([0x7f])).toEqual([0x7f])
    })

    it.ignore('two bytes', () => {
      expect(decode([0xc0, 0])).toEqual([0x2000])
    })

    it.ignore('three bytes', () => {
      expect(decode([0xff, 0xff, 0x7f])).toEqual([0x1fffff])
    })

    it.ignore('four bytes', () => {
      expect(decode([0x81, 0x80, 0x80, 0])).toEqual([0x200000])
    })

    it.ignore('maximum 32-bit integer', () => {
      expect(decode([0x8f, 0xff, 0xff, 0xff, 0x7f])).toEqual([0xffffffff])
    })

    it.ignore('incomplete sequence causes error', () => {
      expect(() => {
        decode([0xff])
      }).toThrowError('Incomplete sequence')
    })

    it.ignore('incomplete sequence causes error, even if value is zero', () => {
      expect(() => {
        decode([0x80])
      }).toThrowError('Incomplete sequence')
    })

    it.ignore('multiple values', () => {
      const input = [
        0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81,
        0x80, 0,
      ]
      const expected = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000]
      expect(decode(input)).toEqual(expected)
    })
  })
})
