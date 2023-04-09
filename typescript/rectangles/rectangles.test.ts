import { count } from './rectangles.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Rectangles', () => {
  it('no rows', () => {
    const expected = 0
    const actual = count([])
    expect(actual).toEqual(expected)
  })

  it.ignore('no columns', () => {
    const expected = 0
    const actual = count([''])
    expect(actual).toEqual(expected)
  })

  it.ignore('no rectangles', () => {
    const expected = 0
    const actual = count([' '])
    expect(actual).toEqual(expected)
  })

  it.ignore('one rectangle', () => {
    const expected = 1
    const actual = count(['+-+', '| |', '+-+'])
    expect(actual).toEqual(expected)
  })

  it.ignore('two rectangles without shared parts', () => {
    const expected = 2
    const actual = count(['  +-+', '  | |', '+-+-+', '| |  ', '+-+  '])
    expect(actual).toEqual(expected)
  })

  it.ignore('five rectangles with shared parts', () => {
    const expected = 5
    const actual = count(['  +-+', '  | |', '+-+-+', '| | |', '+-+-+'])
    expect(actual).toEqual(expected)
  })

  it.ignore('rectangle of height 1 is counted', () => {
    const expected = 1
    const actual = count(['+--+', '+--+'])
    expect(actual).toEqual(expected)
  })

  it.ignore('rectangle of width 1 is counted', () => {
    const expected = 1
    const actual = count(['++', '||', '++'])
    expect(actual).toEqual(expected)
  })

  it.ignore('1x1 square is counted', () => {
    const expected = 1
    const actual = count(['++', '++'])
    expect(actual).toEqual(expected)
  })

  it.ignore('only complete rectangles are counted', () => {
    const expected = 1
    const actual = count(['  +-+', '    |', '+-+-+', '| | -', '+-+-+'])
    expect(actual).toEqual(expected)
  })

  it.ignore('rectangles can be of different sizes', () => {
    const expected = 3
    const actual = count([
      '+------+----+',
      '|      |    |',
      '+---+--+    |',
      '|   |       |',
      '+---+-------+',
    ])
    expect(actual).toEqual(expected)
  })

  it.ignore('corner is required for a rectangle to be complete', () => {
    const expected = 2
    const actual = count([
      '+------+----+',
      '|      |    |',
      '+------+    |',
      '|   |       |',
      '+---+-------+',
    ])
    expect(actual).toEqual(expected)
  })

  it.ignore('large input with many rectangles', () => {
    const expected = 60
    const actual = count([
      '+---+--+----+',
      '|   +--+----+',
      '+---+--+    |',
      '|   +--+----+',
      '+---+--+--+-+',
      '+---+--+--+-+',
      '+------+  | |',
      '          +-+',
    ])
    expect(actual).toEqual(expected)
  })

  it.ignore('rectangles must have four sides', () => {
    const expected = 5
    const actual = count([
      '+-+ +-+',
      '| | | |',
      '+-+-+-+',
      '  | |  ',
      '+-+-+-+',
      '| | | |',
      '+-+ +-+',
    ])
    expect(actual).toEqual(expected)
  })
})
