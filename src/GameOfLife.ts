import Cell from "./Cell";
import Coordinates from "./Coordinates";
import DeadCell from "./DeadCell";
import LiveCell from "./LiveCell";

export default class GameOfLife {
  private game: Cell[][] = []
  xDimension: number
  yDimension: number

  constructor(xDimension: number, yDimension: number) {
    this.xDimension = xDimension
    this.yDimension = yDimension
    this.game = Array(yDimension).fill(Array(xDimension).fill(new DeadCell()))
  }

  seed(coordinates: [number, number][]) {
    this.game = this.game.map((row, y) =>
      row.map((cell, x) => {
        const seedCell = coordinates.find(([seedX, seedY]) => seedX === x && seedY === y)
        return seedCell ? new LiveCell() : cell
      })
    )
  }

  nextGeneration() {
    this.game = this.game.map((row, y) =>
      row.map((cell, x) => {
        const neighbours = new Coordinates([x, y]).neighbours(this.xDimension, this.yDimension)
        const liveNeighbours = neighbours.filter((neighbour) => this.get(neighbour.x, neighbour.y) instanceof LiveCell)
        return cell.getNextGeneration(liveNeighbours.length)
      })
    )
  }

  get(x: number, y: number): Cell {
    return this.game[y][x]
  }
}