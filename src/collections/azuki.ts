import { Collection } from "../CollectionFactory"
import * as fs from 'fs'
import { RedPanda } from "../emblems/redPanda"

export type AzukiAttributes = {
  Type: string,
  Hair: string,
  Clothing: string,
  Eyes: string,
  Mouth: string,
  Offhand: string,
  Background: string,
  Headgear?: string,
  Neck?: string,
  Ear?: string
}

type AzukiJson = {
  name: string,
  image: string,
  attributes: AzukiAttributes
}

export class Azuki implements Collection {
  bottomIndex: number = 0
  topIndex: number = 9999

  async getEmblemPoints(id: number): Promise<number> {

    var points = 0
    const data = await fs.promises.readFile('./assets/azuki.json', 'utf-8')
    const jsonArray: AzukiJson[] = JSON.parse(data)["AZUKIS"]
    const azuki = jsonArray.find(azukiJson => {
      return azukiJson.name == `Azuki #${id}`
    })
    if (azuki) {
      var points: number = 0
      points += RedPanda.calculatePoints(azuki.attributes)
      Object.entries(azuki.attributes).forEach(([_, value]) => {
        if (value.toLowerCase().includes("frog")) {
          points += 100
        }
      });
    }
    return Promise.resolve(points);
  }

  idIsValid(id: number): boolean {
    if (id > this.topIndex || id < this.bottomIndex) {
      return false;
    } else {
      return true;
    }
  }

  getBasePoints(): number {
    return 1000;
  }
}