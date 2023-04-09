import { Anagram } from './anagram.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Anagram', () => {
  it('no matches', () => {
    const subject = new Anagram('diaper')
    const matches = subject.matches('hello', 'world', 'zombies', 'pants')

    expect(matches).toEqual([])
  })

  it.ignore('detects simple anagram', () => {
    const subject = new Anagram('ant')
    const matches = subject.matches('tan', 'stand', 'at')

    expect(matches).toEqual(['tan'])
  })

  it.ignore('does not detect false positives', () => {
    const subject = new Anagram('galea')
    const matches = subject.matches('eagle')

    expect(matches).toEqual([])
  })

  it.ignore('detects multiple anagrams', () => {
    const subject = new Anagram('master')
    const matches = subject.matches('stream', 'pigeon', 'maters')

    expect(matches).toEqual(['stream', 'maters'])
  })

  it.ignore('does not detect anagram subsets', () => {
    const subject = new Anagram('good')
    const matches = subject.matches('dog', 'goody')

    expect(matches).toEqual([])
  })

  it.ignore('detects anagram', () => {
    const subject = new Anagram('listen')
    const matches = subject.matches('enlists', 'google', 'inlets', 'banana')

    expect(matches).toEqual(['inlets'])
  })

  it.ignore('detects multiple anagrams', () => {
    const subject = new Anagram('allergy')
    const matches = subject.matches(
      'gallery',
      'ballerina',
      'regally',
      'clergy',
      'largely',
      'leading'
    )

    expect(matches).toEqual(['gallery', 'regally', 'largely'])
  })

  it.ignore('detects anagrams case-insensitively', () => {
    const subject = new Anagram('Orchestra')
    const matches = subject.matches('cashregister', 'Carthorse', 'radishes')

    expect(matches).toEqual(['Carthorse'])
  })

  it.ignore('does not detect a word as its own anagram', () => {
    const subject = new Anagram('banana')
    const matches = subject.matches('Banana')

    expect(matches).toEqual([])
  })

  it.ignore('matches() accepts string arguments', () => {
    const subject = new Anagram('ant')
    const matches = subject.matches('stand', 'tan', 'at')

    expect(matches).toEqual(['tan'])
  })

  it.ignore('matches() accepts single string argument', () => {
    const subject = new Anagram('ant')
    const matches = subject.matches('tan')

    expect(matches).toEqual(['tan'])
  })
})
