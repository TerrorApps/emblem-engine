import { AzukiAttributes } from "../../src/collections/azuki"
import { Spirit } from "../../src/emblems/spirit"

describe('Spirit Emblem', () => {
  test('returns 0 if zero attribute has spirit', () => {
    const attributes = {
    } as AzukiAttributes

    const result = new Spirit().calculatePoints(attributes)

    expect(result).toEqual(0)
  })

  test('returns 15000 if type is spirit', () => {
    const attributes = {
      Type: "Spirit"
    } as AzukiAttributes

    const result = new Spirit().calculatePoints(attributes)

    expect(result).toEqual(15000)
  })

  test('returns 7500 if id is 1879', () => {
    const attributes = {
    } as AzukiAttributes

    const result = new Spirit().calculatePoints(attributes, 1879)

    expect(result).toEqual(7500)
  })
})