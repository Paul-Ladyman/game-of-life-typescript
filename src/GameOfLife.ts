import Cell from "./Cell";
import Coordinates from "./Coordinates";
import DeadCell from "./DeadCell";
import LiveCell from "./LiveCell";

export default class GameOfLife {
  private game: Cell[][] = []
  private nColumns: number
  private nRows: number
  constructor(nColumns: number, nRows: number) {
    this.nColumns = nColumns
    this.nRows = nRows
    this.game = Array(nColumns).fill(Array(nRows).fill(new DeadCell()))
  }

  seed(coordinates: [number, number][]) {
    const newGame = this.game.map((row, x) =>
      row.map((cell, y) => {
        const seedCell = coordinates.find(([seedX, seedY]) => seedX === x && seedY === y)
        return seedCell ? new LiveCell() : cell
      })
    )
    this.game = newGame
  }

  nextGeneration() {
    this.game.map((row, x) => {
      row.map((cell, y) => {
        const neighbours = new Coordinates([x, y]).neighbours(this.nColumns, this.nRows)
        console.log(neighbours.length)
      })
    })
  }

  get(column: number, row: number): Cell {
    return this.game[column][row]
  }
}