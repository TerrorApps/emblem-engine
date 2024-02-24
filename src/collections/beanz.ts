import { Collection } from "../collectionFactory"

export class Beanz implements Collection {
    getEmblemPoints(id: number): Promise<number> {
      return Promise.resolve(0)
    }

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
