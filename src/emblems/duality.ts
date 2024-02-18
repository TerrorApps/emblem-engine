import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Duality implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (attributes.Type) {
      const type = attributes.Type.toLowerCase()
      if (type.includes("red") || type.includes("blue")) {
        return 250
      }
      return 0
    } else {
      return 0
    }
  }
}