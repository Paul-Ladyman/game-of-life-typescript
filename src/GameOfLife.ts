import Cell from "./Cell";
import DeadCell from "./DeadCell";
import LiveCell from "./LiveCell";

export default class GameOfLife {
  private game: Cell[][] = [];
  constructor(nColumns: number, nRows: number) {
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

  nextGeneration() {}

  get(column: number, row: number): Cell {
    return this.game[column][row]
  }
}