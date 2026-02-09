import Cell from "./Cell";

export default class LiveCell implements Cell {
  getNextGeneration(neighbours: number): Cell {
    throw new Error("Method not implemented.");
  }

}