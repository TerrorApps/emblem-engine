import { AzukiAttributes } from "../../src/collections/azuki";
import { Kigurumi } from "../../src/emblems/kigurumi";

describe('kigurumi emblem', () => {
  test('returns 0 if azuki clothing is not kigurumi', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Kigurumi().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 1000 if azuki clothing is kigurumi', () => {
      const attributes = {
        Clothing: 'RED PANDA KIGURUMI'
      } as AzukiAttributes;

      const result = new Kigurumi().calculatePoints(attributes);

      expect(result).toEqual(1000);
  })

  test('returns 5000 if azuki clothing is golden kigurumi', () => {
      const attributes = {
        Clothing: 'GOLDEN FROG KIGURUMI'
      } as AzukiAttributes;

      const result = new Kigurumi().calculatePoints(attributes);

      expect(result).toEqual(5000);
  })
})