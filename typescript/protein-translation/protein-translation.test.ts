import { translate } from './protein-translation.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Translate input RNA sequences into proteins', () => {
  it('Methionine RNA sequence', () => {
    const expected = ['Methionine']
    expect(translate('AUG')).toEqual(expected)
  })

  it.ignore('Phenylalanine RNA sequence 1', () => {
    const expected = ['Phenylalanine']
    expect(translate('UUU')).toEqual(expected)
  })

  it.ignore('Phenylalanine RNA sequence 2', () => {
    const expected = ['Phenylalanine']
    expect(translate('UUC')).toEqual(expected)
  })

  it.ignore('Leucine RNA sequence 1', () => {
    const expected = ['Leucine']
    expect(translate('UUA')).toEqual(expected)
  })

  it.ignore('Leucine RNA sequence 2', () => {
    const expected = ['Leucine']
    expect(translate('UUG')).toEqual(expected)
  })

  it.ignore('Serine RNA sequence 1', () => {
    const expected = ['Serine']
    expect(translate('UCU')).toEqual(expected)
  })

  it.ignore('Serine RNA sequence 2', () => {
    const expected = ['Serine']
    expect(translate('UCC')).toEqual(expected)
  })

  it.ignore('Serine RNA sequence 3', () => {
    const expected = ['Serine']
    expect(translate('UCA')).toEqual(expected)
  })

  it.ignore('Serine RNA sequence 4', () => {
    const expected = ['Serine']
    expect(translate('UCG')).toEqual(expected)
  })

  it.ignore('Tyrosine RNA sequence 1', () => {
    const expected = ['Tyrosine']
    expect(translate('UAU')).toEqual(expected)
  })

  it.ignore('Tyrosine RNA sequence 2', () => {
    const expected = ['Tyrosine']
    expect(translate('UAC')).toEqual(expected)
  })

  it.ignore('Cysteine RNA sequence 1', () => {
    const expected = ['Cysteine']
    expect(translate('UGU')).toEqual(expected)
  })

  it.ignore('Cysteine RNA sequence 2', () => {
    const expected = ['Cysteine']
    expect(translate('UGC')).toEqual(expected)
  })

  it.ignore('Tryptophan RNA sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGG')).toEqual(expected)
  })

  it.ignore('STOP codon RNA sequence 1', () => {
    const expected: string[] = []
    expect(translate('UAA')).toEqual(expected)
  })

  it.ignore('STOP codon RNA sequence 2', () => {
    const expected: string[] = []
    expect(translate('UAG')).toEqual(expected)
  })

  it.ignore('STOP codon RNA sequence 3', () => {
    const expected: string[] = []
    expect(translate('UGA')).toEqual(expected)
  })

  it.ignore('Sequence of two protein codons translates into proteins', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translate('UUUUUU')).toEqual(expected)
  })

  it.ignore('Sequence of two different protein codons translates into proteins', () => {
    const expected = ['Leucine', 'Leucine']
    expect(translate('UUAUUG')).toEqual(expected)
  })

  it.ignore('Translate RNA strand into correct protein list', () => {
    const expected = ['Methionine', 'Phenylalanine', 'Tryptophan']
    expect(translate('AUGUUUUGG')).toEqual(expected)
  })

  it.ignore('Translation stops if STOP codon at beginning of sequence', () => {
    const expected: string[] = []
    expect(translate('UAGUGG')).toEqual(expected)
  })

  it.ignore('Translation stops if STOP codon at end of two-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGGUAG')).toEqual(expected)
  })

  it.ignore('Translation stops if STOP codon at end of three-codon sequence', () => {
    const expected = ['Methionine', 'Phenylalanine']
    expect(translate('AUGUUUUAA')).toEqual(expected)
  })

  it.ignore('Translation stops if STOP codon in middle of three-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGGUAGUGG')).toEqual(expected)
  })

  it.ignore('Translation stops if STOP codon in middle of six-codon sequence', () => {
    const expected = ['Tryptophan', 'Cysteine', 'Tyrosine']
    expect(translate('UGGUGUUAUUAAUGGUUU')).toEqual(expected)
  })

  it.ignore("Non-existing codon can't translate", () => {
    expect(() => {
      translate('AAA')
    }).toThrowError('Invalid codon')
  })

  it.ignore("Unknown amino acids, not part of a codon, can't translate", () => {
    expect(() => {
      translate('XYZ')
    }).toThrowError('Invalid codon')
  })

  it.ignore("Incomplete RNA sequence can't translate", () => {
    expect(() => {
      translate('AUGU')
    }).toThrowError('Invalid codon')
  })

  it.ignore('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translate('UUCUUCUAAUGGU')).toEqual(expected)
  })
})
