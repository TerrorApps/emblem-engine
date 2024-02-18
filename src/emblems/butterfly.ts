import { AzukiAttributes } from "../collections/azuki";
import { Emblem } from "./emblem";

export class Butterfly implements Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number {
    if (attributes.Special?.toLowerCase().includes("butterfly")) {
      return 900
    } else {
      return 0
    }
  }
}