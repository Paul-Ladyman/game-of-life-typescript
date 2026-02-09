export default interface Cell {
  getNextGeneration(neighbours: number): Cell
}