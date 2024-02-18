import { AzukiAttributes } from "../../src/collections/azuki";
import { Earth } from "../../src/emblems/earth";

describe('lightning emblem', () => {
  test('returns 0 if azuki special is not earth', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Earth().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 1500 if azuki special is earth', () => {
      const attributes = {
        Special: 'EARTH'
      } as AzukiAttributes;

      const result = new Earth().calculatePoints(attributes);

      expect(result).toEqual(1500);
  })

  test('returns 700 if azuki off hand is earth', () => {
      const attributes = {
        Offhand: 'EARTH'
      } as AzukiAttributes;

      const result = new Earth().calculatePoints(attributes);

      expect(result).toEqual(700);
  })
})