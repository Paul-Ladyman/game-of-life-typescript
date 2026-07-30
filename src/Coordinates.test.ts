import Coordinates from "./Coordinates"

describe('neighbours', () => {
  test('returns all the neighbours of a set of coordinates within a specific grid size', () => {
    const coordinates = new Coordinates([1, 1])
    const expected = [
      new Coordinates([0, 0]),
      new Coordinates([0, 1]),
      new Coordinates([0, 2]),
      new Coordinates([1, 0]),
      new Coordinates([1, 2]),
      new Coordinates([2, 0]),
      new Coordinates([2, 1]),
      new Coordinates([2, 2]),
    ]
    expect(coordinates.neighbours(3, 3)).toEqual(expected);
  })

  test('does not return neighbours outside of the grid in the negative x direction', () => {
    const coordinates = new Coordinates([0, 1])
    const expected = [
      new Coordinates([0, 0]),
      new Coordinates([0, 2]),
      new Coordinates([1, 0]),
      new Coordinates([1, 1]),
      new Coordinates([1, 2]),
    ]
    expect(coordinates.neighbours(3, 3)).toEqual(expected);
  })

  test('does not return neighbours outside of the grid in the positive x direction', () => {
    const coordinates = new Coordinates([2, 1])
    const expected = [
      new Coordinates([1, 0]),
      new Coordinates([1, 1]),
      new Coordinates([1, 2]),
      new Coordinates([2, 0]),
      new Coordinates([2, 2]),
    ]
    expect(coordinates.neighbours(3, 3)).toEqual(expected);
  })

  test('does not return neighbours outside of the grid in the negative y direction', () => {
    const coordinates = new Coordinates([1, 0])
    const expected = [
      new Coordinates([0, 0]),
      new Coordinates([0, 1]),
      new Coordinates([1, 1]),
      new Coordinates([2, 0]),
      new Coordinates([2, 1]),
    ]
    expect(coordinates.neighbours(3, 3)).toEqual(expected);
  })

  test('does not return neighbours outside of the grid in the positive y direction', () => {
    const coordinates = new Coordinates([1, 2])
    const expected = [
      new Coordinates([0, 1]),
      new Coordinates([0, 2]),
      new Coordinates([1, 1]),
      new Coordinates([2, 1]),
      new Coordinates([2, 2]),
    ]
    expect(coordinates.neighbours(3, 3)).toEqual(expected);
  })

  test('returns an empty list when there are no neighbours', () => {
    const coordinates = new Coordinates([0, 0])
    expect(coordinates.neighbours(1, 1)).toEqual([]);
  })
})