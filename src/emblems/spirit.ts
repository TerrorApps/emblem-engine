import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Spirit implements Emblem {
  SpiritString = "spirit"
  SpecialSpirit = 1879

  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (this.isSpirit(attributes, id)) {
      return 15000
    } else if (id && id == this.SpecialSpirit) {
      return 7500
    } else {
      return 0
    }
  }

  isSpirit(attributes: AzukiAttributes, id?: number): Boolean {
    if (attributes.Type && attributes.Type.toLowerCase().includes(this.SpiritString)) {
      return true
    } else {
      return false
    }
  }
}