import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Lightning implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    var points: number = 0
    if (attributes.Special?.toLowerCase().includes("lightning")) {
      points += 1500
    } else if (attributes.Eyes && attributes.Eyes.toLowerCase().includes("lightning")) {
      points += 700
    } else if (attributes.Offhand && attributes.Offhand.toLowerCase().includes("lightning")) {
      points += 700
    } else {
      return 0
    }

    return points
  }
}