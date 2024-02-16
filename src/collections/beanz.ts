import { Collection } from "../collectionFactory"

export class BeanzProperties implements Collection {
    idIsValid(id: number): boolean {
        if (id > 19999 || id < 0) {
            return false
        } else {
            return true
        }
    }

    getBasePoints(): number {
        return 67
    }
}
