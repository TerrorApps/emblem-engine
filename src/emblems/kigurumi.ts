import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Kigurumi implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    var points: number = 0
    if (attributes.Clothing && attributes.Clothing.toLowerCase().includes("kigurumi")) {
      if (attributes.Clothing.toLowerCase().includes("golden")) {
        points += 5000
      } else {
        points += 1000
      }
    } else {
      return 0
    }

    return points
  }
}