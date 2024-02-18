import { AzukiAttributes } from "../../src/collections/azuki";
import { FireFlies } from "../../src/emblems/fireflies";

describe('fireflies emblem', () => {
  test('returns 0 if azuki special is not fireflies', () => {
      const attributes = {} as AzukiAttributes;

      const result = new FireFlies().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 900 if azuki special is fireflies', () => {
      const attributes = {
        Special: 'FIREFLIES'
      } as AzukiAttributes;

      const result = new FireFlies().calculatePoints(attributes);

      expect(result).toEqual(900);
  })

  test('returns 0 if azuki special is fire', () => {
      const attributes = {
        Special: 'FIRE'
      } as AzukiAttributes;

      const result = new FireFlies().calculatePoints(attributes);

      expect(result).toEqual(0);
  })
})