import { Azuki } from "../../src/collections/azuki"

describe('azuki', () => {
  test('returns 100 for frog emblem for id 3387', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(3387)

    expect(points).toEqual(100)
  })

  test('returns 400 for two red panda and type red emblem for id 7880', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(7880)

    expect(points).toEqual(650)
  })

  test('returns 100 for one cat emblem for id 541', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(541)

    expect(points).toEqual(100)
  })

  test('returns 100 for one sloth emblem for id 6803', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(6803)

    expect(points).toEqual(100)
  })

  test('returns 1000 for one golden emblem for id 5208', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(5208)

    expect(points).toEqual(1000)
  })

  test('returns 15000 for one spirit type for id 9584', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(9584)

    expect(points).toEqual(15000)
  })

  test('returns 900 for fireflies special for id 7732', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(7732)

    expect(points).toEqual(900)
  })

  test('returns 900 for butterfly special for id 4239', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(4239)

    expect(points).toEqual(900)
  })

  test('returns 900 for fox fire special for id 5952', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(5952)

    expect(points).toEqual(900)
  })

  test('returns 900 for smoke special for id 8142', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(8142)

    expect(points).toEqual(900)
  })

  test('returns 900 for sakura special for id 649', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(649)

    expect(points).toEqual(900)
  })

  test('returns 2500 for lightning special for id 1155', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(1155)

    expect(points).toEqual(1500)
  })

  test('returns 2500 for earth special for id 8894', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(8894)

    expect(points).toEqual(1500)
  })

  test('returns 2500 for fire special for id 4182', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(4182)

    expect(points).toEqual(1500)
  })

  test('returns 1100 for kigurumi for id 1731', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(1731)

    expect(points).toEqual(1100)
  })

  test('returns 250 for azuki type red for id 9955', async () => {
    const azukiCollection = new Azuki()

    const points = await azukiCollection.getEmblemPoints(9955)

    expect(points).toEqual(250)
  })
})