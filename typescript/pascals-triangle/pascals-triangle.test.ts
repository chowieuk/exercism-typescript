import { Triangle } from './pascals-triangle.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Triangle', () => {
  it('with one row', () => {
    expect(new Triangle(1).rows).toEqual([[1]])
  })

  it.ignore('with two rows', () => {
    expect(new Triangle(2).rows).toEqual([[1], [1, 1]])
  })

  it.ignore('with three rows', () => {
    expect(new Triangle(3).rows).toEqual([[1], [1, 1], [1, 2, 1]])
  })

  it.ignore('last row', () => {
    expect(new Triangle(4).lastRow).toEqual([1, 3, 3, 1])
  })

  it.ignore('fifth row', () => {
    expect(new Triangle(5).lastRow).toEqual([1, 4, 6, 4, 1])
  })

  it.ignore('twentieth row', () => {
    const twentieth = [
      1, 19, 171, 969, 3876, 11628, 27132, 50388, 75582, 92378, 92378, 75582,
      50388, 27132, 11628, 3876, 969, 171, 19, 1,
    ]
    expect(new Triangle(20).lastRow).toEqual(twentieth)
  })
})
