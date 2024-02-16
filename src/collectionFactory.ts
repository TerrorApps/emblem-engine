import { ContractAddresses } from ".";
import { AzukiProperties } from "./collections/azuki";
import { BeanzProperties } from "./collections/beanz";
import { ElementalProperties } from "./collections/elemental";

export interface Collection {
    idIsValid(id: number): boolean
    getBasePoints(): number
}

export class NoOpCollection implements Collection {
    idIsValid(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    getBasePoints(): number {
        throw new Error("Method not implemented.");
    }
}

export class CollectionFactory {
    static getCollectionProperties(contractAddress: string) {
        if (contractAddress == ContractAddresses.Azuki) {
            return new AzukiProperties()
        } else if (contractAddress == ContractAddresses.Beanz) {
            return new BeanzProperties()
        } else if (contractAddress == ContractAddresses.Elemental) {
            return new ElementalProperties()
        } else {
            return new NoOpCollection()
        }
    }
}