import Cell from "./Cell";
import LiveCell from "./LiveCell";

export default class DeadCell implements Cell {
  getNextGeneration(neighbours: number): Cell {
    if (neighbours === 3) return new LiveCell()
    return this
  }
}