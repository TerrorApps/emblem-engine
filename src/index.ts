import {
  Collection,
  CollectionFactory,
  NoOpCollection
} from "./collectionFactory"

export enum ContractAddresses {
  Azuki = '0xED5AF388653567Af2F388E6224dC7C4b3241C544',
  Beanz = '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949',
  Elemental = '0xB6a37b5d14D502c3Ab0Ae6f3a0E058BC9517786e'
}

export interface PointsResult {
  success: boolean,
  points?: number,
  message?: string
}

export class EmblemEngine {
  constructor() {}

  async getPoints(contractAddress: ContractAddresses, id: number): Promise<PointsResult> {
    const collection: Collection = CollectionFactory.get(contractAddress)
    if (collection instanceof NoOpCollection) {
      return {
        success: false,
        message: 'contract address does not exist'
      }
    }

    if (collection.idIsValid(id)) {
      const emblemPoints = await collection.getEmblemPoints(id)
      return Promise.resolve({
        success: true,
        points: collection.getBasePoints() + emblemPoints
      })
    } else {
      return Promise.resolve({
        success: false,
        message: 'id does not exist'
      })
    }
  } 
}