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

  describe('nextGeneration', () => {
    it('applies the game of life rules to a seed', () => {
      const gameOfLife = new GameOfLife(5, 5);

      const glider: [number, number][] = [
        [2, 1],
        [3, 2],
        [1, 3],
        [2, 3],
        [3, 3],
      ]
      gameOfLife.seed(glider)

      const nextGenGlider: [number, number][] = [
        [1, 2],
        [3, 2],
        [2, 3],
        [3, 3],
        [2, 4],
      ]

      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          const nextGenCell = nextGenGlider.find(([gliderX, gliderY]) => gliderX === x && gliderY === y)
          console.log('>>>', x, y);
          if (nextGenCell)
            expect(gameOfLife.get(x, y) instanceof LiveCell).toBe(true)
          else
            expect(gameOfLife.get(x, y) instanceof DeadCell).toBe(true)
        }
      }
    });
  });
});