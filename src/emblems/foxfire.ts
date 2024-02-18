import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class FoxFire implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (attributes.Special?.toLowerCase().includes("fox fire")) {
      return 900
    } else {
      return 0
    }
  }
}