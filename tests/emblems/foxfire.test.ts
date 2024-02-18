import { AzukiAttributes } from "../../src/collections/azuki";
import { FoxFire } from "../../src/emblems/foxfire";

describe('fox fire emblem', () => {
  test('returns 0 if azuki special is not fox fire', () => {
      const attributes = {} as AzukiAttributes;

      const result = new FoxFire().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 900 if azuki special is fox fire', () => {
      const attributes = {
        Special: 'FOX FIRE'
      } as AzukiAttributes;

      const result = new FoxFire().calculatePoints(attributes);

      expect(result).toEqual(900);
  })

  test('returns 0 if azuki special is fire', () => {
      const attributes = {
        Special: 'FIRE'
      } as AzukiAttributes;

      const result = new FoxFire().calculatePoints(attributes);

      expect(result).toEqual(0);
  })
})