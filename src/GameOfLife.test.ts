import DeadCell from "./DeadCell";
import GameOfLife from "./GameOfLife";
import LiveCell from "./LiveCell";

describe('GameOfLife', () => {
  it('initialises a game of dead cells of a particular number of rows and columns', () => {
    const gameOfLife = new GameOfLife(2, 2);
    expect(gameOfLife.get(0, 0) instanceof DeadCell).toBe(true)
    expect(gameOfLife.get(0, 1) instanceof DeadCell).toBe(true)
    expect(gameOfLife.get(1, 0) instanceof DeadCell).toBe(true)
    expect(gameOfLife.get(1, 1) instanceof DeadCell).toBe(true)
  });

  describe('seed', () => {
    it('allows a number of dead cells to be turned into live cells', () => {
      const gameOfLife = new GameOfLife(2, 2);
      gameOfLife.seed([
        [1, 0],
        [0, 1]
      ])
      expect(gameOfLife.get(0, 0) instanceof DeadCell).toBe(true)
      expect(gameOfLife.get(0, 1) instanceof LiveCell).toBe(true)
      expect(gameOfLife.get(1, 0) instanceof LiveCell).toBe(true)
      expect(gameOfLife.get(1, 1) instanceof DeadCell).toBe(true)
    });
  })
});