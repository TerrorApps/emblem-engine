import { AzukiAttributes } from "../../src/collections/azuki";
import { Duality } from "../../src/emblems/duality";

describe('duality emblem', () => {
  test('returns 0 if azuki type is not red', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Duality().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 0 if azuki type is not blue', () => {
      const attributes = {} as AzukiAttributes;

      const result = new Duality().calculatePoints(attributes);

      expect(result).toEqual(0);
  })

  test('returns 250 if azuki type is red', () => {
      const attributes = {
        Type: 'RED'
      } as AzukiAttributes;

      const result = new Duality().calculatePoints(attributes);

      expect(result).toEqual(250);
  })

  test('returns 250 if azuki type is blue', () => {
      const attributes = {
        Type: 'BLUE'
      } as AzukiAttributes;

      const result = new Duality().calculatePoints(attributes);

      expect(result).toEqual(250);
  })
})