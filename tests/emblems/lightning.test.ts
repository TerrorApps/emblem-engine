import { AzukiAttributes } from "../../src/collections/azuki";
import { Lightning } from "../../src/emblems/lightning";

describe('lightning emblem', () => {
  test('returns 0 if azuki special is not lightning', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Lightning().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 1500 if azuki special is lightning', () => {
      const attributes = {
        Special: 'LIGHTNING'
      } as AzukiAttributes;

      const result = new Lightning().calculatePoints(attributes);

      expect(result).toEqual(1500);
  })

  test('returns 700 if azuki eyes is lightning', () => {
      const attributes = {
        Eyes: 'LIGHTNING'
      } as AzukiAttributes;

      const result = new Lightning().calculatePoints(attributes);

      expect(result).toEqual(700);
  })

  test('returns 700 if azuki off hand is lightning', () => {
      const attributes = {
        Offhand: 'LIGHTNING ORB'
      } as AzukiAttributes;

      const result = new Lightning().calculatePoints(attributes);

      expect(result).toEqual(700);
  })
})