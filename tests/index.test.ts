import {
  EmblemEngine,
  ContractAddresses,
  PointsResult
} from '../src';


describe('getPoints', () => {
  const engine = new EmblemEngine()
  describe('azuki', () => {
    test('returns 1000 for azuki 4529', () => {
      const result: PointsResult = engine.getPoints(ContractAddresses.Azuki, 4529)

      expect(result.success).toBeTruthy()
      expect(result.points).toEqual(1000)
    })

    test('returns success fail if id does no exist', () => {
      const result: PointsResult = engine.getPoints(ContractAddresses.Azuki, 1234567)

      expect(result.success).toBeFalsy()
      expect(result.message).toEqual('id does not exist')
    })
  })

  describe('beanz', () => {
    test('returns 67 for beanz 7396', () => {
      const result: PointsResult = engine.getPoints(ContractAddresses.Beanz, 7396)

      expect(result.success).toBeTruthy()
      expect(result.points).toEqual(67)
    })

    test('returns success fail if id does no exist', async () => {
      const result: PointsResult = await engine.getPoints(ContractAddresses.Beanz, 1234567)

      expect(result.success).toBeFalsy()
      expect(result.message).toEqual('id does not exist')
    })
  })

  describe('elemental', () => {
    test('returns 100 for beanz 12969', async () => {
      const result: PointsResult = await engine.getPoints(ContractAddresses.Elemental, 12969)

      expect(result.success).toBeTruthy()
      expect(result.points).toEqual(100)
    })

    test('returns success fail if id does no exist', async () => {
      const result: PointsResult = await engine.getPoints(ContractAddresses.Beanz, 1234567)

      expect(result.success).toBeFalsy()
      expect(result.message).toEqual('id does not exist')
    })
  })
})