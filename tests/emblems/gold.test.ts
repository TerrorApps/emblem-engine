import { AzukiAttributes } from "../../src/collections/azuki"
import { Gold } from "../../src/emblems/gold";

describe("Azuki", () => {
  describe("Gold Emblem", () => {
    test("returns 100 if zero attribute has gold", () => {
      const attributes = {} as AzukiAttributes;

      const result = new Gold().calculatePoints(attributes);

      expect(result).toEqual(0);
    });

    test("returns 100 if only one attribute has gold", () => {
      const attributes = {
        Clothing: "GOLDEN T-SHIRT",
      } as AzukiAttributes;

      const result = new Gold().calculatePoints(attributes);

      expect(result).toEqual(1000);
    });

    test("returns 400 if only two attribute has gold", () => {
      const attributes = {
        Clothing: "GOLDEN T-SHIRT",
        Headgear: "GOLDEN BASEBALL CAP",
      } as AzukiAttributes;

      const result = new Gold().calculatePoints(attributes);

      expect(result).toEqual(4000);
    });

    test("returns 1000 if only three attribute has gold", () => {
      const attributes = {
        Clothing: "GOLDEN T-SHIRT",
        Headgear: "GOLDEN BASEBALL CAP",
        Neck: "GOLDEN HEADPHONES",
      } as AzukiAttributes;

      const result = new Gold().calculatePoints(attributes);

      expect(result).toEqual(10000);
    });
  });
});