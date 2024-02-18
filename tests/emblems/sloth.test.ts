import { AzukiAttributes } from "../../src/collections/azuki"
import { Sloth } from "../../src/emblems/sloth"

describe('Sloth Emblem', () => {
  test('returns 0 if zero attribute has sloth', () => {
    const attributes = {
    } as AzukiAttributes

    const result = new Sloth().calculatePoints(attributes)

    expect(result).toEqual(0)
  })

  test('returns 100 if only one attribute has sloth', () => {
    const attributes = {
      Clothing: "SLOTH T-SHIRT"
    } as AzukiAttributes

    const result = new Sloth().calculatePoints(attributes)

    expect(result).toEqual(100)
  })

  test('returns 400 if only two attribute has sloth', () => {
    const attributes = {
      Clothing: "SLOTH T-SHIRT",
      Headgear: "SLOTH BASEBALL CAP"
    } as AzukiAttributes

    const result = new Sloth().calculatePoints(attributes)

    expect(result).toEqual(400)
  })

  test('returns 1000 if only three attribute has sloth', () => {
    const attributes = {
      Clothing: "SLOTH T-SHIRT",
      Headgear: "SLOTH BASEBALL CAP",
      Neck: "SLOTH HEADPHONES"
    } as AzukiAttributes

    const result = new Sloth().calculatePoints(attributes)

    expect(result).toEqual(1000)
  })

  test('returns 12000 if only three attribute has sloth', () => {
    const attributes = {
      Clothing: "SLOTH T-SHIRT",
      Headgear: "SLOTH BASEBALL CAP",
      Neck: "SLOTH HEADPHONES",
      Ear: "SLOTH"
    } as AzukiAttributes

    const result = new Sloth().calculatePoints(attributes)

    expect(result).toEqual(12000)
  })
})