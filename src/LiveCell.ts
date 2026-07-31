import Cell from "./Cell";
import DeadCell from "./DeadCell";

export default class LiveCell implements Cell {
  getNextGeneration(neighbours: number): Cell {
    if (neighbours < 2 || neighbours > 3) return new DeadCell()
    return this
  }

}