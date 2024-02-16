import { ContractAddresses } from ".";
import { Azuki } from "./collections/azuki";
import { Elemental } from "./collections/elemental";
import { Beanz } from "./collections/beanz";

export interface Collection {
    idIsValid(id: number): boolean
    getBasePoints(): number
    getEmblemPoints(id: number): Promise<number>
}

export class NoOpCollection implements Collection {
    getEmblemPoints(id: number): Promise<number> {
      throw new Error("Method not implemented.");
    }

    idIsValid(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    getBasePoints(): number {
        throw new Error("Method not implemented.");
    }
}

export class CollectionFactory {
  static get(contractAddress: string) {
    if (contractAddress == ContractAddresses.Azuki) {
      return new Azuki();
    } else if (contractAddress == ContractAddresses.Beanz) {
      return new Beanz();
    } else if (contractAddress == ContractAddresses.Elemental) {
      return new Elemental();
    } else {
      return new NoOpCollection();
    }
  }
}
