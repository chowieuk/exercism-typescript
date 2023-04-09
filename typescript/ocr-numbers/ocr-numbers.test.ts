import { convert } from './ocr-numbers.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('ocr', () => {
  it('recognizes zero', () => {
    expect(convert(' _ \n' + '| |\n' + '|_|\n' + '   ')).toBe('0')
  })

  it.ignore('recognizes one', () => {
    expect(convert('   \n' + '  |\n' + '  |\n' + '   ')).toBe('1')
  })

  it.ignore('recognizes two', () => {
    expect(convert(' _ \n' + ' _|\n' + '|_ \n' + '   ')).toBe('2')
  })

  it.ignore('recognizes three', () => {
    expect(convert(' _ \n' + ' _|\n' + ' _|\n' + '   ')).toBe('3')
  })

  it.ignore('recognizes four', () => {
    expect(convert('   \n' + '|_|\n' + '  |\n' + '   ')).toBe('4')
  })

  it.ignore('recognizes five', () => {
    expect(convert(' _ \n' + '|_ \n' + ' _|\n' + '   ')).toBe('5')
  })

  it.ignore('recognizes six', () => {
    expect(convert(' _ \n' + '|_ \n' + '|_|\n' + '   ')).toBe('6')
  })

  it.ignore('recognizes seven', () => {
    expect(convert(' _ \n' + '  |\n' + '  |\n' + '   ')).toBe('7')
  })

  it.ignore('recognizes eight', () => {
    expect(convert(' _ \n' + '|_|\n' + '|_|\n' + '   ')).toBe('8')
  })

  it.ignore('recognizes nine', () => {
    expect(convert(' _ \n' + '|_|\n' + ' _|\n' + '   ')).toBe('9')
  })

  it.ignore('recognizes ten', () => {
    expect(convert('    _ \n' + '  || |\n' + '  ||_|\n' + '      ')).toBe('10')
  })

  it.ignore('identifies garble', () => {
    expect(convert('   \n' + '| |\n' + '| |\n' + '   ')).toBe('?')
  })

  it.ignore('converts 110101100', () => {
    expect(
      convert(
        '       _     _        _  _ \n' +
          '  |  || |  || |  |  || || |\n' +
          '  |  ||_|  ||_|  |  ||_||_|\n' +
          '                           '
      )
    ).toBe('110101100')
  })

  it.ignore('identifies garble mixed in', () => {
    expect(
      convert(
        '       _     _           _ \n' +
          '  |  || |  || |     || || |\n' +
          '  |  | _|  ||_|  |  ||_||_|\n' +
          '                           '
      )
    ).toBe('11?10?1?0')
  })

  it.ignore('converts 1234567890', () => {
    expect(
      convert(
        '    _  _     _  _  _  _  _  _ \n' +
          '  | _| _||_||_ |_   ||_||_|| |\n' +
          '  ||_  _|  | _||_|  ||_| _||_|\n' +
          '                              '
      )
    ).toBe('1234567890')
  })

  it.ignore('converts 123 456 789', () => {
    expect(
      convert(
        '    _  _ \n' +
          '  | _| _|\n' +
          '  ||_  _|\n' +
          '         \n' +
          '    _  _ \n' +
          '|_||_ |_ \n' +
          '  | _||_|\n' +
          '         \n' +
          ' _  _  _ \n' +
          '  ||_||_|\n' +
          '  ||_| _|\n' +
          '         '
      )
    ).toBe('123,456,789')
  })
})
