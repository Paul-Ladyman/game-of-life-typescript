import GameOfLife from "./GameOfLife";
import LiveCell from "./LiveCell";

export default function printGol(gol: GameOfLife) {
  let output = ''

  for(let y = 0; y < gol.yDimension; y++) {
    for(let x = 0; x < gol.xDimension; x++) {
      const cell = gol.get(x, y)
      if (cell instanceof LiveCell) output += '0'
      else output += '-'
    }
    output += '\n'
  }

  console.log(output)
}