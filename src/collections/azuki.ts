import { Collection } from "../collectionFactory"

export class AzukiProperties implements Collection {
    idIsValid(id: number): boolean {
        if (id > 9999 || id < 0) {
            return false
        } else {
            return true
        }
    }

    getBasePoints(): number {
        return 1000
    }
}