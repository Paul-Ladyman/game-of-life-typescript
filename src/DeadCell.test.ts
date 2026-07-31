import DeadCell from "./DeadCell"
import LiveCell from "./LiveCell"

describe('getNextGeneration', () => {
  it('returns a dead cell for less than three neighbours', () => {
    expect(new DeadCell().getNextGeneration(2)).toBeInstanceOf(DeadCell)
  })

  it('returns a dead cell for greater than three neighbours', () => {
    expect(new DeadCell().getNextGeneration(4)).toBeInstanceOf(DeadCell)
  })

  it('returns a live cell for three neighbours', () => {
    expect(new DeadCell().getNextGeneration(3)).toBeInstanceOf(LiveCell)
  })
})