import Cell from "./Cell";

export default class DeadCell implements Cell {
  getNextGeneration(neighbours: number): Cell {
    throw new Error("Method not implemented.");
  }
}