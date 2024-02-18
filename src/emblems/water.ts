import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Water implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    var points: number = 0
    if (attributes.Special?.toLowerCase() === "water") {
      points += 1500
    } else if (attributes.Hair && attributes.Hair.toLowerCase().includes("water")) {
      points += 3000
    } else if (attributes.Offhand && attributes.Offhand.toLowerCase().includes("water")) {
      points += 700
    } else {
      return 0
    }

    return points
  }
}