import GameOfLife from "./GameOfLife"
import printGol from "./printer"
import { wing } from "./seed/seed"

const gol = new GameOfLife({x: 100, y: 50})
gol.seed(wing)

setInterval(() => {
  console.clear()
  printGol(gol)
  gol.nextGeneration()
}, 200)