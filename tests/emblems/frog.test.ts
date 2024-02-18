import { AzukiAttributes } from "../../src/collections/azuki"
import { Frog } from "../../src/emblems/frog"

describe('Frog Emblem', () => {
  test('returns 100 if zero attribute has frog', () => {
    const attributes = {
    } as AzukiAttributes

    const result = new Frog().calculatePoints(attributes)

    expect(result).toEqual(0)
  })

  test('returns 100 if only one attribute has frog', () => {
    const attributes = {
      Clothing: "FROG T-SHIRT"
    } as AzukiAttributes

    const result = new Frog().calculatePoints(attributes)

    expect(result).toEqual(100)
  })

  test('returns 400 if only two attribute has frog', () => {
    const attributes = {
      Clothing: "FROG T-SHIRT",
      Headgear: "FROG BASEBALL CAP"
    } as AzukiAttributes

    const result = new Frog().calculatePoints(attributes)

    expect(result).toEqual(400)
  })

  test('returns 1000 if only three attribute has frog', () => {
    const attributes = {
      Clothing: "FROG T-SHIRT",
      Headgear: "FROG BASEBALL CAP",
      Neck: "FROG HEADPHONES"
    } as AzukiAttributes

    const result = new Frog().calculatePoints(attributes)

    expect(result).toEqual(1000)
  })

  test('returns 12000 if only three attribute has Frog', () => {
    const attributes = {
      Clothing: "FROG T-SHIRT",
      Headgear: "FROG BASEBALL CAP",
      Neck: "FROG HEADPHONES",
      Ear: "FROG"
    } as AzukiAttributes

    const result = new Frog().calculatePoints(attributes)

    expect(result).toEqual(12000)
  })
})