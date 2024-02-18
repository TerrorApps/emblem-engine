import { Collection } from "../CollectionFactory"
import { Emblem } from "../emblems/emblem"
import { getAzukiById } from "../util/getAzukiById"
import {
  Cat,
  FireFlies,
  Frog,
  Gold,
  RedPanda,
  Sloth,
  Spirit,
  Butterfly,
  FoxFire,
  Smoke,
  Sakura,
  Lightning,
  Earth,
  Fire,
  Water,
  Kigurumi,
  Duality
} from "../emblems"

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
  Ear?: string,
  Special?: string
}

export type AzukiJson = {
  name: string,
  image: string,
  attributes: AzukiAttributes
}

export class Azuki implements Collection {
  emblems: Emblem[] = [
    new Frog(),
    new RedPanda(),
    new Cat(),
    new Sloth(),
    new Gold(),
    new Spirit(),
    new FireFlies(),
    new Butterfly(),
    new FoxFire(),
    new Smoke(),
    new Sakura(),
    new Lightning(),
    new Earth(),
    new Fire(),
    new Water(),
    new Kigurumi(),
    new Duality()
  ]

  bottomIndex: number = 0
  topIndex: number = 9999

  async getEmblemPoints(id: number): Promise<number> {
    var points = 0;
    const azuki: AzukiJson = await getAzukiById(id)
    if (azuki) {
      points += this.emblems
        .map((emblem) => emblem.calculatePoints(azuki.attributes))
        .reduce((acc, currentValue) => acc + currentValue)
    }
    return Promise.resolve(points)
  }

  idIsValid(id: number): boolean {
    if (id > this.topIndex || id < this.bottomIndex) {
      return false
    } else {
      return true
    }
  }

  getBasePoints(): number {
    return 1000
  }
}