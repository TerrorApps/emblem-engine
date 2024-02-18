import { AzukiAttributes } from "../../src/collections/azuki";
import { Butterfly } from "../../src/emblems/butterfly";

describe('butterfly emblem', () => {
  test('returns 0 if azuki special is not butterfly', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Butterfly().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 900 if azuki special is buttefly', () => {
      const attributes = {
        Special: 'BUTTERFLY'
      } as AzukiAttributes;

      const result = new Butterfly().calculatePoints(attributes);

      expect(result).toEqual(900);
  })
})