import Cell from "./Cell";
import Coordinates from "./Coordinates";
import DeadCell from "./DeadCell";
import LiveCell from "./LiveCell";

type Dimensions = {
  x: number,
  y: number
}

export default class GameOfLife {
  private game: Cell[][] = []
  dimensions: Dimensions

  constructor(dimensions: Dimensions) {
    this.dimensions = dimensions
    this.game = Array(dimensions.y).fill(Array(dimensions.x).fill(new DeadCell()))
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
        const neighbours = new Coordinates([x, y]).neighbours(this.dimensions.x, this.dimensions.y)
        const liveNeighbours = neighbours.filter((neighbour) => this.get(neighbour.x, neighbour.y) instanceof LiveCell)
        return cell.getNextGeneration(liveNeighbours.length)
      })
    )
  }

  get(x: number, y: number): Cell {
    return this.game[y][x]
  }
}