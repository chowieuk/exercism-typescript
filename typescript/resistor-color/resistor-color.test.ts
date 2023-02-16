import { colorCode, COLORS } from './resistor-color.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  })

  it('White', () => {
    expect(colorCode('white')).toEqual(9)
  })

  it('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  })
})

describe('Colors', () => {
  it('returns all colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ])
  })
})
