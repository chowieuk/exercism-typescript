import { recite } from './twelve-days.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('verse', () => {
  it('first day a partridge in a pear tree', () => {
    const expected =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n'
    expect(recite(1, 1)).toEqual(expected)
  })

  it.ignore('second day two turtle doves', () => {
    const expected =
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(2, 2)).toEqual(expected)
  })

  it.ignore('third day three french hens', () => {
    const expected =
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(3, 3)).toEqual(expected)
  })

  it.ignore('fourth day four calling birds', () => {
    const expected =
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(4, 4)).toEqual(expected)
  })

  it.ignore('fifth day five gold rings', () => {
    const expected =
      'On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(5, 5)).toEqual(expected)
  })

  it.ignore('sixth day six geese-a-laying', () => {
    const expected =
      'On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(6, 6)).toEqual(expected)
  })

  it.ignore('seventh day seven swans-a-swimming', () => {
    const expected =
      'On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(7, 7)).toEqual(expected)
  })

  it.ignore('eighth day eight maids-a-milking', () => {
    const expected =
      'On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(8, 8)).toEqual(expected)
  })

  it.ignore('ninth day nine ladies dancing', () => {
    const expected =
      'On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(9, 9)).toEqual(expected)
  })

  it.ignore('tenth day ten lords-a-leaping', () => {
    const expected =
      'On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(10, 10)).toEqual(expected)
  })

  it.ignore('eleventh day eleven pipers piping', () => {
    const expected =
      'On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(11, 11)).toEqual(expected)
  })

  it.ignore('twelfth day twelve drummers drumming', () => {
    const expected =
      'On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(12, 12)).toEqual(expected)
  })
})

describe('lyrics', () => {
  it.ignore('recites first three verses of the song', () => {
    const expected =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\nOn the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\nOn the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(1, 3)).toEqual(expected)
  })

  it.ignore('recites three verses from the middle of the song', () => {
    const expected =
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(4, 6)).toEqual(expected)
  })

  it.ignore('recites the whole song', () => {
    const expected =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\nOn the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\nOn the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n'
    expect(recite(1, 12)).toEqual(expected)
  })
})
