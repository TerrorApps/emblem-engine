import { AzukiAttributes } from "../../src/collections/azuki";
import { Sakura } from "../../src/emblems/sakura";

describe('sakura emblem', () => {
  test('returns 0 if azuki special is not sakura', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Sakura().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 900 if azuki special is sakura', () => {
      const attributes = {
        Special: 'SAKURA'
      } as AzukiAttributes;

      const result = new Sakura().calculatePoints(attributes);

      expect(result).toEqual(900);
  })
})