import { Bowling } from './bowling.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Bowling', () => {
  describe('Check game can be scored correctly.', () => {
    it('should be able to score a game with all zeros', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(0)
    })

    it.ignore('should be able to score a game with no strikes or spares', () => {
      const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(90)
    })

    it.ignore('a spare followed by zeros is worth ten points', () => {
      const rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(10)
    })

    it.ignore('points scored in the roll after a spare are counted twice', () => {
      const rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(16)
    })

    it.ignore('consecutive spares each get a one roll bonus', () => {
      const rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(31)
    })

    it.ignore('a spare in the last frame gets a one roll bonus that is counted once', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(17)
    })

    it.ignore('a strike earns ten points in a frame with a single roll', () => {
      const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(10)
    })

    it.ignore('points scored in the two rolls after a strike are counted twice as a bonus', () => {
      const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(26)
    })

    it.ignore('consecutive strikes each get the two roll bonus', () => {
      const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(81)
    })

    it.ignore('a strike in the last frame gets a two roll bonues that is counted once', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(18)
    })

    it.ignore('rolling a spare with the two roll bonus does not get a bonus roll', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(20)
    })

    it.ignore('strikes with the two roll bonus do not get bonus rolls', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(30)
    })

    it.ignore('last two strikes followed by only last bonus with non strike points', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 1,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(31)
    })

    it.ignore('a strike with the one roll bonus after a spare in the last frame does not get a bonus', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(20)
    })

    it.ignore('all strikes is a perfect game', () => {
      const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(300)
    })
  })

  describe('Check game rules.', () => {
    it.ignore('rolls cannot score negative points', () => {
      const bowling = new Bowling()
      expect(() => {
        bowling.roll(-1)
      }).toThrow('Negative roll is invalid')
    })

    it.ignore('a roll cannot score more than 10 points', () => {
      const bowling = new Bowling()
      expect(() => {
        bowling.roll(11)
      }).toThrow('Pin count exceeds pins on the lane')
    })

    it.ignore('two rolls in a frame cannot score more than 10 points', () => {
      const bowling = new Bowling()
      bowling.roll(5)
      expect(() => {
        bowling.roll(6)
      }).toThrow('Pin count exceeds pins on the lane')
    })

    it.ignore('bonus roll after a strike in the last frame cannot score more than 10 points', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(11)
      }).toThrow('Pin count exceeds pins on the lane')
    })

    it.ignore('two bonus rolls after a strike in the last frame cannot score more than 10 points', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(6)
      }).toThrow('Pin count exceeds pins on the lane')
    })

    it.ignore('two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(bowling.score()).toEqual(26)
    })

    it.ignore('the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(10)
      }).toThrow('Pin count exceeds pins on the lane')
    })

    it.ignore('second bonus roll after a strike in the last frame cannot score more than 10 points', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(11)
      }).toThrow('Pin count exceeds pins on the lane')
    })

    it.ignore('an unstarted game cannot be scored', () => {
      const bowling = new Bowling()
      expect(() => {
        bowling.score()
      }).toThrow('Score cannot be taken until the end of the game')
    })

    it.ignore('an incomplete game cannot be scored', () => {
      const rolls = [0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.score()
      }).toThrow('Score cannot be taken until the end of the game')
    })

    it.ignore('cannot roll if game already has ten frames', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(0)
      }).toThrow('Cannot roll after game is over')
    })

    it.ignore('bonus rolls for a strike in the last frame must be rolled before score can be calculated', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.score()
      }).toThrow('Score cannot be taken until the end of the game')
    })

    it.ignore('both bonus rolls for a strike in the last frame must be rolled before score can be calculated', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.score()
      }).toThrow('Score cannot be taken until the end of the game')
    })

    it.ignore('bonus roll for a spare in the last frame must be rolled before score can be calculated', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.score()
      }).toThrow('Score cannot be taken until the end of the game')
    })

    it.ignore('cannot roll after bonus roll for spare', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 2,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(2)
      }).toThrow('Cannot roll after game is over')
    })

    it.ignore('cannot roll after bonus rolls for strike', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 2,
      ]
      const bowling = new Bowling()
      rolls.forEach((roll) => {
        bowling.roll(roll)
      })
      expect(() => {
        bowling.roll(2)
      }).toThrow('Cannot roll after game is over')
    })
  })
})
