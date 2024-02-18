import { AzukiAttributes } from "../../src/collections/azuki"
import { Cat } from "../../src/emblems/cat"

describe('Cat Emblem', () => {
  test('returns 0 if zero attribute has cat', () => {
    const attributes = {
    } as AzukiAttributes

    const result = new Cat().calculatePoints(attributes)

    expect(result).toEqual(0)
  })

  test('returns 100 if only one attribute has cat', () => {
    const attributes = {
      Clothing: "CAT T-SHIRT"
    } as AzukiAttributes

    const result = new Cat().calculatePoints(attributes)

    expect(result).toEqual(100)
  })

  test('returns 400 if only two attribute has cat', () => {
    const attributes = {
      Clothing: "CAT T-SHIRT",
      Headgear: "CAT BASEBALL CAP"
    } as AzukiAttributes

    const result = new Cat().calculatePoints(attributes)

    expect(result).toEqual(400)
  })

  test('returns 1000 if only three attribute has cat', () => {
    const attributes = {
      Clothing: "CAT T-SHIRT",
      Headgear: "CAT BASEBALL CAP",
      Neck: "CAT HEADPHONES"
    } as AzukiAttributes

    const result = new Cat().calculatePoints(attributes)

    expect(result).toEqual(1000)
  })

  test('returns 12000 if only three attribute has cat', () => {
    const attributes = {
      Clothing: "CAT T-SHIRT",
      Headgear: "CAT BASEBALL CAP",
      Neck: "CAT HEADPHONES",
      Ear: "CAT"
    } as AzukiAttributes

    const result = new Cat().calculatePoints(attributes)

    expect(result).toEqual(12000)
  })
})