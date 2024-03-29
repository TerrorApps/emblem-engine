import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Sloth implements Emblem {
  SlothString = "sloth"

  calculatePoints(attributes: AzukiAttributes): number {
    const count = this.getCount(attributes)

    if (count == 0) {
      return 0
    } else if (count == 1) {
      return 100
    } else if (count == 2) {
      return 400
    } else if (count == 3) {
      return 1000
    } else if (count == 4) {
      return 12000
    } else {
      return 0
    }
  }

  getCount(attributes: AzukiAttributes): number {
    var count = 0;
    Object.entries(attributes).forEach(([_, value]) => {
      if (value.toLowerCase().includes(this.SlothString)) {
        count ++
      }
    });

    return count
  }
}