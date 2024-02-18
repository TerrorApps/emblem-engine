import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Smoke implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (attributes.Special?.toLowerCase().includes("smoke")) {
      return 900
    } else {
      return 0
    }
  }
}