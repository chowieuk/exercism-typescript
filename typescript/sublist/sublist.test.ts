import { List } from './sublist.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Sublist', () => {
  it('empty lists', () => {
    const listOne = new List()
    const listTwo = new List()
    const expected = 'equal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('empty list within non empty list', () => {
    const listOne = new List()
    const listTwo = new List(1, 2, 3)
    const expected = 'sublist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('non empty list contains empty list', () => {
    const listOne = new List(1, 2, 3)
    const listTwo = new List()
    const expected = 'superlist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('list equals itself', () => {
    const listOne = new List(1, 2, 3)
    const listTwo = new List(1, 2, 3)
    const expected = 'equal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('different lists', () => {
    const listOne = new List(1, 2, 3)
    const listTwo = new List(2, 3, 4)
    const expected = 'unequal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('false start', () => {
    const listOne = new List(1, 2, 5)
    const listTwo = new List(0, 1, 2, 3, 1, 2, 5, 6)
    const expected = 'sublist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('consecutive', () => {
    const listOne = new List(1, 1, 2)
    const listTwo = new List(0, 1, 1, 1, 2, 1, 2)
    const expected = 'sublist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('sublist at start', () => {
    const listOne = new List(0, 1, 2)
    const listTwo = new List(0, 1, 2, 3, 4, 5)
    const expected = 'sublist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('sublist in middle', () => {
    const listOne = new List(2, 3, 4)
    const listTwo = new List(0, 1, 2, 3, 4, 5)
    const expected = 'sublist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('sublist at end', () => {
    const listOne = new List(3, 4, 5)
    const listTwo = new List(0, 1, 2, 3, 4, 5)
    const expected = 'sublist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('at start of superlist', () => {
    const listOne = new List(0, 1, 2, 3, 4, 5)
    const listTwo = new List(0, 1, 2)
    const expected = 'superlist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('in middle of superlist', () => {
    const listOne = new List(0, 1, 2, 3, 4, 5)
    const listTwo = new List(2, 3)
    const expected = 'superlist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('at end of superlist', () => {
    const listOne = new List(0, 1, 2, 3, 4, 5)
    const listTwo = new List(3, 4, 5)
    const expected = 'superlist'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('first list missing element from second list', () => {
    const listOne = new List(1, 3)
    const listTwo = new List(1, 2, 3)
    const expected = 'unequal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('second list missing element from first list', () => {
    const listOne = new List(1, 2, 3)
    const listTwo = new List(1, 3)
    const expected = 'unequal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('first list missing additional digits from second list', () => {
    const listOne = new List(1, 2)
    const listTwo = new List(1, 22)
    const expected = 'unequal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('order matters to a list', () => {
    const listOne = new List(1, 2, 3)
    const listTwo = new List(3, 2, 1)
    const expected = 'unequal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })

  it.ignore('same digits but different numbers', () => {
    const listOne = new List(1, 0, 1)
    const listTwo = new List(10, 1)
    const expected = 'unequal'

    expect(listOne.compare(listTwo)).toEqual(expected)
  })
})
