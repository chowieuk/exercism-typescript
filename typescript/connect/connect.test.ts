import { Board } from './connect.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Judging a game of connect', () => {
  it('an empty board has no winner', () => {
    const board = [
      '. . . . .',
      ' . . . . .',
      '  . . . . .',
      '   . . . . .',
      '    . . . . .',
    ]
    expect(new Board(board).winner()).toEqual('')
  })

  it.ignore('X can win on a 1x1 board', () => {
    const board = ['X']
    expect(new Board(board).winner()).toEqual('X')
  })

  it.ignore('O can win on a 1x1 board', () => {
    const board = ['O']
    expect(new Board(board).winner()).toEqual('O')
  })

  it.ignore('only edges does not make a winner', () => {
    const board = ['O O O X', ' X . . X', '  X . . X', '   X O O O']
    expect(new Board(board).winner()).toEqual('')
  })

  it.ignore('illegal diagonal does not make a winner', () => {
    const board = [
      'X O . .',
      ' O X X X',
      '  O X O .',
      '   . O X .',
      '    X X O O',
    ]
    expect(new Board(board).winner()).toEqual('')
  })

  it.ignore('nobody wins crossing adjacent angles', () => {
    const board = [
      'X . . .',
      ' . X O .',
      '  O . X O',
      '   . O . X',
      '    . . O .',
    ]
    expect(new Board(board).winner()).toEqual('')
  })

  it.ignore('X wins crossing from left to right', () => {
    const board = [
      '. O . .',
      ' O X X X',
      '  O X O .',
      '   X X O X',
      '    . O X .',
    ]
    expect(new Board(board).winner()).toEqual('X')
  })

  it.ignore('O wins crossing from top to bottom', () => {
    const board = [
      '. O . .',
      ' O X X X',
      '  O O O .',
      '   X X O X',
      '    . O X .',
    ]
    expect(new Board(board).winner()).toEqual('O')
  })

  it.ignore('X wins using a convoluted path', () => {
    const board = [
      '. X X . .',
      ' X . X . X',
      '  . X . X .',
      '   . X X . .',
      '    O O O O O',
    ]
    expect(new Board(board).winner()).toEqual('X')
  })

  it.ignore('X wins using a spiral path', () => {
    const board = [
      'O X X X X X X X X',
      ' O X O O O O O O O',
      '  O X O X X X X X O',
      '   O X O X O O O X O',
      '    O X O X X X O X O',
      '     O X O O O X O X O',
      '      O X X X X X O X O',
      '       O O O O O O O X O',
      '        X X X X X X X X O',
    ]
    expect(new Board(board).winner()).toEqual('X')
  })
})
