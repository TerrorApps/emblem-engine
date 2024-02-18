import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class FireFlies implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (attributes.Special?.toLowerCase().includes("fireflies")) {
      return 900
    } else {
      return 0
    }
  }
}