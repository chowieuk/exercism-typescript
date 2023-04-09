import { Garden } from './kindergarten-garden.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('partial Garden', () => {
  it('garden with single student', () => {
    expect(new Garden('RC\nGG').plants('Alice')).toEqual([
      'radishes',
      'clover',
      'grass',
      'grass',
    ])
  })

  it.ignore('different garden with single student', () => {
    expect(new Garden('VC\nRC').plants('Alice')).toEqual([
      'violets',
      'clover',
      'radishes',
      'clover',
    ])
  })

  it.ignore('garden with two students', () => {
    expect(new Garden('VVCG\nVVRC').plants('Bob')).toEqual([
      'clover',
      'grass',
      'radishes',
      'clover',
    ])
  })

  describe('multiple students for the same garden with three students', () => {
    it.ignore("second student's garden", () => {
      expect(new Garden('VVCCGG\nVVCCGG').plants('Bob')).toEqual([
        'clover',
        'clover',
        'clover',
        'clover',
      ])
    })

    it.ignore("third student's garden", () => {
      expect(new Garden('VVCCGG\nVVCCGG').plants('Charlie')).toEqual([
        'grass',
        'grass',
        'grass',
        'grass',
      ])
    })
  })
})

describe('full garden', () => {
  const diagram = 'VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV'
  const garden = new Garden(diagram)

  it.ignore("for Alice, first student's garden", () => {
    expect(garden.plants('Alice')).toEqual([
      'violets',
      'radishes',
      'violets',
      'radishes',
    ])
  })

  it.ignore("for Bob, second student's garden", () => {
    expect(garden.plants('Bob')).toEqual([
      'clover',
      'grass',
      'clover',
      'clover',
    ])
  })

  it.ignore('for Charlie', () => {
    expect(garden.plants('Charlie')).toEqual([
      'violets',
      'violets',
      'clover',
      'grass',
    ])
  })

  it.ignore('for David', () => {
    expect(garden.plants('David')).toEqual([
      'radishes',
      'violets',
      'clover',
      'radishes',
    ])
  })

  it.ignore('for Eve', () => {
    expect(garden.plants('Eve')).toEqual([
      'clover',
      'grass',
      'radishes',
      'grass',
    ])
  })

  it.ignore('for Fred', () => {
    expect(garden.plants('Fred')).toEqual([
      'grass',
      'clover',
      'violets',
      'clover',
    ])
  })

  it.ignore('for Ginny', () => {
    expect(garden.plants('Ginny')).toEqual([
      'clover',
      'grass',
      'grass',
      'clover',
    ])
  })

  it.ignore('for Harriet', () => {
    expect(garden.plants('Harriet')).toEqual([
      'violets',
      'radishes',
      'radishes',
      'violets',
    ])
  })

  it.ignore('for Ileana', () => {
    expect(garden.plants('Ileana')).toEqual([
      'grass',
      'clover',
      'violets',
      'clover',
    ])
  })

  it.ignore('for Joseph', () => {
    expect(garden.plants('Joseph')).toEqual([
      'violets',
      'clover',
      'violets',
      'grass',
    ])
  })

  it.ignore("for Kincaid, second to last student's garden", () => {
    expect(garden.plants('Kincaid')).toEqual([
      'grass',
      'clover',
      'clover',
      'grass',
    ])
  })

  it.ignore("for Larry, last student's garden", () => {
    expect(garden.plants('Larry')).toEqual([
      'grass',
      'violets',
      'clover',
      'violets',
    ])
  })
})

describe('disordered class', () => {
  const diagram = 'VCRRGVRG\nRVGCCGCV'
  const students = ['Samantha', 'Patricia', 'Xander', 'Roger']
  const garden = new Garden(diagram, students)

  it.ignore('for Patricia', () => {
    expect(garden.plants('Patricia')).toEqual([
      'violets',
      'clover',
      'radishes',
      'violets',
    ])
  })

  it.ignore('for Roger', () => {
    expect(garden.plants('Roger')).toEqual([
      'radishes',
      'radishes',
      'grass',
      'clover',
    ])
  })

  it.ignore('for Samantha', () => {
    expect(garden.plants('Samantha')).toEqual([
      'grass',
      'violets',
      'clover',
      'grass',
    ])
  })

  it.ignore('for Xander', () => {
    expect(garden.plants('Xander')).toEqual([
      'radishes',
      'grass',
      'clover',
      'violets',
    ])
  })
})

describe('Two gardens, different students', () => {
  const diagram = 'VCRRGVRG\nRVGCCGCV'
  const garden1 = new Garden(diagram, ['Alice', 'Bob', 'Charlie', 'Dan'])
  const garden2 = new Garden(diagram, ['Bob', 'Charlie', 'Dan', 'Erin'])

  it.ignore('Bob and Charlie for each garden', () => {
    expect(garden1.plants('Bob')).toEqual([
      'radishes',
      'radishes',
      'grass',
      'clover',
    ])
    expect(garden2.plants('Bob')).toEqual([
      'violets',
      'clover',
      'radishes',
      'violets',
    ])
    expect(garden1.plants('Charlie')).toEqual([
      'grass',
      'violets',
      'clover',
      'grass',
    ])
    expect(garden2.plants('Charlie')).toEqual([
      'radishes',
      'radishes',
      'grass',
      'clover',
    ])
  })
})
