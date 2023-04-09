import { Triangle } from './triangle.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    it('all sides are equal', () => {
      const triangle = new Triangle(2, 2, 2)
      expect(triangle.isEquilateral).toBe(true)
    })

    it.ignore('any side is unequal', () => {
      const triangle = new Triangle(2, 3, 2)
      expect(triangle.isEquilateral).toBe(false)
    })

    it.ignore('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6)
      expect(triangle.isEquilateral).toBe(false)
    })

    it.ignore('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0)
      expect(triangle.isEquilateral).toBe(false)
    })

    it.ignore('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.5, 0.5)
      expect(triangle.isEquilateral).toBe(true)
    })
  })

  describe('isosceles triangle', () => {
    it.ignore('last two sides are equal', () => {
      const triangle = new Triangle(3, 4, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    it.ignore('first two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3)
      expect(triangle.isIsosceles).toBe(true)
    })

    it.ignore('first and last sides are equal', () => {
      const triangle = new Triangle(4, 3, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    it.ignore('equilateral triangles are also isosceles', () => {
      const triangle = new Triangle(4, 4, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    it.ignore('no sides are equal', () => {
      const triangle = new Triangle(2, 3, 4)
      expect(triangle.isIsosceles).toBe(false)
    })

    it.ignore('first triangle inequality violation', () => {
      const triangle = new Triangle(1, 1, 3)
      expect(triangle.isIsosceles).toBe(false)
    })

    it.ignore('second triangle inequality violation', () => {
      const triangle = new Triangle(1, 3, 1)
      expect(triangle.isIsosceles).toBe(false)
    })

    it.ignore('third triangle inequality violation', () => {
      const triangle = new Triangle(3, 1, 1)
      expect(triangle.isIsosceles).toBe(false)
    })

    it.ignore('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.5)
      expect(triangle.isIsosceles).toBe(true)
    })
  })

  describe('scalene triangle', () => {
    it.ignore('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6)
      expect(triangle.isScalene).toBe(true)
    })

    it.ignore('all sides are equal', () => {
      const triangle = new Triangle(4, 4, 4)
      expect(triangle.isScalene).toBe(false)
    })

    it.ignore('first and second sides are equal', () => {
      const triangle = new Triangle(4, 4, 3)
      expect(triangle.isScalene).toBe(false)
    })

    it.ignore('first and third sides are equal', () => {
      const triangle = new Triangle(3, 4, 3)
      expect(triangle.isScalene).toBe(false)
    })

    it.ignore('second and third sides are equal', () => {
      const triangle = new Triangle(4, 3, 3)
      expect(triangle.isScalene).toBe(false)
    })

    it.ignore('may not violate triangle inequality', () => {
      const triangle = new Triangle(7, 3, 2)
      expect(triangle.isScalene).toBe(false)
    })

    it.ignore('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.6)
      expect(triangle.isScalene).toBe(true)
    })
  })
})
