import GameOfLife from "./GameOfLife"
import printGol from "./printer"

const glider: [number, number][] = [
  [3, 2],
  [1, 3],
  [3, 3],
  [2, 4],
  [3, 4]
]

const wing: [number, number][] = [
  [1, 0],
  [2, 0],
  [0, 1],
  [3, 1],
  [1, 2],
  [3, 2],
  [2, 3],
  [3, 3]
]

const gol = new GameOfLife(100, 50)
gol.seed(wing)

setInterval(() => {
  console.clear()
  printGol(gol)
  gol.nextGeneration()
}, 200)