import { flatten } from './flatten-array.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Flatten Array', () => {
  it('no nesting', () => {
    const expected = [0, 1, 2]
    expect(flatten([0, 1, 2])).toEqual(expected)
  })

  it.ignore('flattens array with just integers present', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(flatten([1, [2, 3, 4, 5, 6, 7], 8])).toEqual(expected)
  })

  it.ignore('5 level nesting', () => {
    const expected = [0, 2, 2, 3, 8, 100, 4, 50, -2]
    expect(flatten([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2])).toEqual(expected)
  })

  it.ignore('6 level nesting', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(flatten([1, [2, [[3]], [4, [[5]]], 6, 7], 8])).toEqual(expected)
  })

  it.ignore('6 level nest list with null values', () => {
    const expected = [0, 2, 2, 3, 8, 100, -2]
    expect(
      flatten([0, 2, [[2, 3], 8, [[100]], undefined, [[undefined]]], -2])
    ).toEqual(expected)
  })

  it.ignore('all values in nested list are null', () => {
    const expected: number[] = []
    expect(
      flatten([
        undefined,
        [[[undefined]]],
        undefined,
        undefined,
        [[undefined, undefined], undefined],
        undefined,
      ])
    ).toEqual(expected)
  })
})
