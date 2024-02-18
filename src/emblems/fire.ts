import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Fire implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    var points: number = 0
    if (attributes.Special?.toLowerCase() === "fire") {
      points += 1500
    } else if (attributes.Eyes && attributes.Eyes.toLowerCase().includes("fire")) {
      points += 700
    } else if (attributes.Hair && attributes.Hair.toLowerCase().includes("fire")) {
      points += 3000
    } else if (attributes.Offhand && attributes.Offhand.toLowerCase().includes("fire")) {
      points += 700
    } else {
      return 0
    }

    return points
  }
}