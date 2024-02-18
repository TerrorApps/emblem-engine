import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Sakura implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (attributes.Special?.toLowerCase().includes("sakura")) {
      return 900
    } else {
      return 0
    }
  }
}