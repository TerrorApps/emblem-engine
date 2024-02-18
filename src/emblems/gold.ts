import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Gold implements Emblem {
  GoldenString = "golden"

  calculatePoints(attributes: AzukiAttributes): number {
    const count = this.getCount(attributes)

    if (count == 0) {
      return 0
    } else if (count == 1) {
      return 1000
    } else if (count == 2) {
      return 4000
    } else if (count == 3) {
      return 10000
    } else {
      return 0
    }
  }

  getCount(attributes: AzukiAttributes): number {
    var count = 0;

    Object.entries(attributes).forEach(([_, value]) => {
      if (value.toLowerCase().includes(this.GoldenString)) {
        count ++
      }
    });

    return count
  }
}