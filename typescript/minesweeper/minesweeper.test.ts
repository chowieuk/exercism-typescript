import { annotate } from './minesweeper.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Minesweeper annotate', () => {
  it('handles no rows', () => {
    expect(annotate([])).toEqual([])
  })

  it.ignore('handles no columns', () => {
    expect(annotate([''])).toEqual([''])
  })

  it.ignore('handles no mines', () => {
    const input = ['   ', '   ', '   ']
    const expected = ['   ', '   ', '   ']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles board with only mines', () => {
    const input = ['***', '***', '***']
    const expected = ['***', '***', '***']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles mine surrounded by spaces', () => {
    const input = ['   ', ' * ', '   ']
    const expected = ['111', '1*1', '111']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles space surrounded by mines', () => {
    const input = ['***', '* *', '***']
    const expected = ['***', '*8*', '***']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles horizontal line', () => {
    const input = [' * * ']
    const expected = ['1*2*1']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles horizontal line, mines at edges', () => {
    const input = ['*   *']
    const expected = ['*1 1*']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles vertical line', () => {
    const input = [' ', '*', ' ', '*', ' ']
    const expected = ['1', '*', '2', '*', '1']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles vertical line, mines at edges', () => {
    const input = ['*', ' ', ' ', ' ', '*']
    const expected = ['*', '1', ' ', '1', '*']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles cross', () => {
    const input = ['  *  ', '  *  ', '*****', '  *  ', '  *  ']
    const expected = [' 2*2 ', '25*52', '*****', '25*52', ' 2*2 ']
    expect(annotate(input)).toEqual(expected)
  })

  it.ignore('handles large board', () => {
    const input = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      ']
    const expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111',
    ]
    expect(annotate(input)).toEqual(expected)
  })
})
