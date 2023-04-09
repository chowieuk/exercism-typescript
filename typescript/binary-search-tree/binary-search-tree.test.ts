import { BinarySearchTree } from './binary-search-tree.ts'
import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'
import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'

function recordAllData(bst: BinarySearchTree): unknown[] {
  const out: unknown[] = []
  bst.each((data) => {
    out.push(data)
  })
  return out
}

describe('BinarySearchTree', () => {
  it('should retain data', () => {
    expect(new BinarySearchTree(4).data).toEqual(4)
  })

  it.ignore('should insert a lesser number to the left', () => {
    const four = new BinarySearchTree(4)
    four.insert(2)

    expect(four.data).toEqual(4)
    expect(four.left!.data).toEqual(2)
  })

  it.ignore('should insert the same number to the left', () => {
    const four = new BinarySearchTree(4)
    four.insert(4)

    expect(four.data).toEqual(4)
    expect(four.left!.data).toEqual(4)
  })

  it.ignore('should insert a greater number to the right', () => {
    const four = new BinarySearchTree(4)
    four.insert(5)

    expect(four.data).toEqual(4)
    expect(four.right!.data).toEqual(5)
  })

  it.ignore('should deal with a complex tree', () => {
    const four = new BinarySearchTree(4)
    four.insert(2)
    four.insert(6)
    four.insert(1)
    four.insert(3)
    four.insert(7)
    four.insert(5)

    expect(four.data).toEqual(4)
    expect(four.left!.data).toEqual(2)
    expect(four.left!.left!.data).toEqual(1)
    expect(four.left!.right!.data).toEqual(3)
    expect(four.right!.data).toEqual(6)
    expect(four.right!.left!.data).toEqual(5)
    expect(four.right!.right!.data).toEqual(7)
  })

  it.ignore('should iterate over one element', () => {
    expect(recordAllData(new BinarySearchTree(4))).toEqual([4])
  })

  it.ignore('should iterate over smaller element', () => {
    const four = new BinarySearchTree(4)
    four.insert(2)

    expect(recordAllData(four)).toEqual([2, 4])
  })

  it.ignore('should iterate over larger element', () => {
    const four = new BinarySearchTree(4)
    four.insert(5)

    expect(recordAllData(four)).toEqual([4, 5])
  })

  it.ignore('should iterate over complex tree', () => {
    const four = new BinarySearchTree(4)
    four.insert(2)
    four.insert(1)
    four.insert(3)
    four.insert(6)
    four.insert(7)
    four.insert(5)

    expect(recordAllData(four)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
