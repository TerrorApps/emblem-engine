import { AzukiAttributes } from "../collections/azuki";

export interface Emblem {
  calculatePoints(attributes: AzukiAttributes, id?: number): number
}