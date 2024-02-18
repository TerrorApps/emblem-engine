import { AzukiAttributes } from "../../src/collections/azuki";
import { Water } from "../../src/emblems";

describe('lightning emblem', () => {
  test('returns 0 if azuki special is not water', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Water().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 1500 if azuki special is water', () => {
      const attributes = {
        Special: 'WATER'
      } as AzukiAttributes;

      const result = new Water().calculatePoints(attributes);

      expect(result).toEqual(1500);
  })

  test('returns 700 if azuki off hand is water', () => {
      const attributes = {
        Offhand: 'WATER ORB'
      } as AzukiAttributes;

      const result = new Water().calculatePoints(attributes);

      expect(result).toEqual(700);
  })

  test('returns 3000 if azuki hair is water', () => {
      const attributes = {
        Hair: 'WATER'
      } as AzukiAttributes;

      const result = new Water().calculatePoints(attributes);

      expect(result).toEqual(3000);
  })
})