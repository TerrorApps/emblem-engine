import { Azuki } from "../../src/collections/azuki"

describe('azuki', () => {
  test('returns 100 for frog emblem for id 3387', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(3387)

    expect(points).toEqual(100)
  })

  test('returns 400 for two red panda emblem for id 6955', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(7880)

    expect(points).toEqual(400)
  })
})