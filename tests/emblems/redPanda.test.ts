import { AzukiAttributes } from "../../src/collections/azuki"
import { RedPanda } from "../../src/emblems/redPanda"

describe('Red Panda Emblem', () => {
  test('returns 100 if zero attribute has red panda', () => {
    const attributes = {
    } as AzukiAttributes

    const result = RedPanda.calculatePoints(attributes)

    expect(result).toEqual(0)
  })

  test('returns 100 if only one attribute has red panda', () => {
    const attributes = {
      Clothing: "RED PANDA T-SHIRT"
    } as AzukiAttributes

    const result = RedPanda.calculatePoints(attributes)

    expect(result).toEqual(100)
  })

  test('returns 400 if only two attribute has red panda', () => {
    const attributes = {
      Clothing: "RED PANDA T-SHIRT",
      Headgear: "RED PANDA BASEBALL CAP"
    } as AzukiAttributes

    const result = RedPanda.calculatePoints(attributes)

    expect(result).toEqual(400)
  })

  test('returns 1000 if only three attribute has red panda', () => {
    const attributes = {
      Clothing: "RED PANDA T-SHIRT",
      Headgear: "RED PANDA BASEBALL CAP",
      Neck: "RED PANDA HEADPHONES"
    } as AzukiAttributes

    const result = RedPanda.calculatePoints(attributes)

    expect(result).toEqual(1000)
  })

  test('returns 12000 if only three attribute has red panda', () => {
    const attributes = {
      Clothing: "RED PANDA T-SHIRT",
      Headgear: "RED PANDA BASEBALL CAP",
      Neck: "RED PANDA HEADPHONES",
      Ear: "RED PANDA"
    } as AzukiAttributes

    const result = RedPanda.calculatePoints(attributes)

    expect(result).toEqual(12000)
  })
})