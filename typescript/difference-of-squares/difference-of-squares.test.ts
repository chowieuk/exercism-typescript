import { Squares } from './difference-of-squares.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Squares', () => {
  describe('up to 5', () => {
    const squares = new Squares(5)

    it('gets the square of sum', () => {
      expect(squares.squareOfSum).toBe(225)
    })

    it.ignore('gets the sum of squares', () => {
      expect(squares.sumOfSquares).toBe(55)
    })

    it.ignore('gets the difference', () => {
      expect(squares.difference).toBe(170)
    })
  })

  describe('up to 10', () => {
    const squares = new Squares(10)

    it.ignore('gets the square of sum', () => {
      expect(squares.squareOfSum).toBe(3025)
    })

    it.ignore('gets the sum of squares', () => {
      expect(squares.sumOfSquares).toBe(385)
    })

    it.ignore('gets the difference', () => {
      expect(squares.difference).toBe(2640)
    })
  })

  describe('up to 100', () => {
    const squares = new Squares(100)

    it.ignore('gets the square of sum', () => {
      expect(squares.squareOfSum).toBe(25502500)
    })

    it.ignore('gets the sum of squares', () => {
      expect(squares.sumOfSquares).toBe(338350)
    })

    it.ignore('gets the difference', () => {
      expect(squares.difference).toBe(25164150)
    })
  })
})