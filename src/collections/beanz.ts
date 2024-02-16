import { Collection } from "../CollectionFactory"

export class Beanz implements Collection {
    getEmblemPoints(id: number): Promise<number> {
      throw new Error("Method not implemented.")
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
