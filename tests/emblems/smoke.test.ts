import { AzukiAttributes } from "../../src/collections/azuki";
import { Smoke } from "../../src/emblems/smoke";

describe('smoke emblem', () => {
  test('returns 0 if azuki special is not smoke', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Smoke().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 900 if azuki special is smoke', () => {
      const attributes = {
        Special: 'SMOKE'
      } as AzukiAttributes;

      const result = new Smoke().calculatePoints(attributes);

      expect(result).toEqual(900);
  })
})