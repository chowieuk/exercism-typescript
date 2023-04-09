import { answer } from './wordy.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Wordy', () => {
  it('just a number', () => {
    expect(answer('What is 5?')).toEqual(5)
  })

  it.ignore('addition', () => {
    expect(answer('What is 1 plus 1?')).toEqual(2)
  })

  it.ignore('more addition', () => {
    expect(answer('What is 53 plus 2?')).toEqual(55)
  })

  it.ignore('addition with negative numbers', () => {
    expect(answer('What is -1 plus -10?')).toEqual(-11)
  })

  it.ignore('large addition', () => {
    expect(answer('What is 123 plus 45678?')).toEqual(45801)
  })

  it.ignore('subtraction', () => {
    expect(answer('What is 4 minus -12?')).toEqual(16)
  })

  it.ignore('multiplication', () => {
    expect(answer('What is -3 multiplied by 25?')).toEqual(-75)
  })

  it.ignore('division', () => {
    expect(answer('What is 33 divided by -3?')).toEqual(-11)
  })

  it.ignore('multiple additions', () => {
    expect(answer('What is 1 plus 1 plus 1?')).toEqual(3)
  })

  it.ignore('addition and subtraction', () => {
    expect(answer('What is 1 plus 5 minus -2?')).toEqual(8)
  })

  it.ignore('multiple subtraction', () => {
    expect(answer('What is 20 minus 4 minus 13?')).toEqual(3)
  })

  it.ignore('subtraction then addition', () => {
    expect(answer('What is 17 minus 6 plus 3?')).toEqual(14)
  })

  it.ignore('multiple multiplication', () => {
    expect(answer('What is 2 multiplied by -2 multiplied by 3?')).toEqual(-12)
  })

  it.ignore('addition and multiplication', () => {
    expect(answer('What is -3 plus 7 multiplied by -2?')).toEqual(-8)
  })

  it.ignore('multiple division', () => {
    expect(answer('What is -12 divided by 2 divided by -3?')).toEqual(2)
  })

  it.ignore('unknown operation', () => {
    expect(() => answer('What is 52 cubed?')).toThrow(
      new Error('Unknown operation')
    )
  })

  it.ignore('Non math question', () => {
    expect(() => answer('Who is the President of the United States?')).toThrow(
      new Error('Unknown operation')
    )
  })

  it.ignore('reject problem missing an operand', () => {
    expect(() => answer('What is 1 plus?')).toThrow('Syntax error')
  })

  it.ignore('reject problem with no operands or operators', () => {
    expect(() => answer('What is?')).toThrow('Syntax error')
  })

  it.ignore('reject two operations in a row', () => {
    expect(() => answer('What is 1 plus plus 2?')).toThrow(
      new Error('Syntax error')
    )
  })

  it.ignore('reject two numbers in a row', () => {
    expect(() => answer('What is 1 plus 2 1?')).toThrow(
      new Error('Syntax error')
    )
  })

  it.ignore('reject postfix notation', () => {
    expect(() => answer('What is 1 2 plus?')).toThrow('Syntax error')
  })

  it.ignore('reject prefix notation', () => {
    expect(() => answer('What is plus 1 2?')).toThrow('Syntax error')
  })
})
