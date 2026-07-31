import DeadCell from "./DeadCell"
import LiveCell from "./LiveCell"

describe('getNextGeneration', () => {
  it('returns a live cell for two neighbours', () => {
    expect(new LiveCell().getNextGeneration(2)).toBeInstanceOf(LiveCell)
  })

  it('returns a live cell for three neighbours', () => {
    expect(new LiveCell().getNextGeneration(3)).toBeInstanceOf(LiveCell)
  })

  it('returns a dead cell for less than 2 neighbours', () => {
    expect(new LiveCell().getNextGeneration(1)).toBeInstanceOf(DeadCell)
  })

  it('returns a dead cell for more than 3 neighbours', () => {
    expect(new LiveCell().getNextGeneration(4)).toBeInstanceOf(DeadCell)
  })
})