export default class Coordinates {
  x: number
  y: number

  constructor(coordinates: number[]) {
    this.x = coordinates[0]
    this.y = coordinates[1]
  }

  neighbours(nColumns: number, nRows: number): Coordinates[] {
    const translations = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]

    return translations.flatMap((translation) => {
      const neighbourX = this.x + translation[0]
      const neighbourY = this.y + translation[1]
      const xValid = neighbourX > -1 && neighbourX < nColumns
      const yValid = neighbourY > -1 && neighbourY < nRows
      if (xValid && yValid)
        return [new Coordinates([neighbourX, neighbourY])]
      return []
    })
  }
}