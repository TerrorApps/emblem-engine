import { AzukiAttributes } from "../../src/collections/azuki";
import { Fire } from "../../src/emblems";

describe('lightning emblem', () => {
  test('returns 0 if azuki special is not fire', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Fire().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 1500 if azuki special is fire', () => {
      const attributes = {
        Special: 'FIRE'
      } as AzukiAttributes;

      const result = new Fire().calculatePoints(attributes);

      expect(result).toEqual(1500);
  })

  test('returns 700 if azuki eyes is fire', () => {
      const attributes = {
        Eyes: 'FIRE'
      } as AzukiAttributes;

      const result = new Fire().calculatePoints(attributes);

      expect(result).toEqual(700);
  })

  test('returns 700 if azuki off hand is fire', () => {
      const attributes = {
        Offhand: 'FIREBALL'
      } as AzukiAttributes;

      const result = new Fire().calculatePoints(attributes);

      expect(result).toEqual(700);
  })

  test('returns 3000 if azuki hair is fire', () => {
      const attributes = {
        Hair: 'FIRE'
      } as AzukiAttributes;

      const result = new Fire().calculatePoints(attributes);

      expect(result).toEqual(3000);
  })

  test('returns 0 if azuki special is fireflies', () => {
      const attributes = {
        Special: 'FIREFLIES'
      } as AzukiAttributes;

      const result = new Fire().calculatePoints(attributes);

      expect(result).toEqual(0);
  })
})