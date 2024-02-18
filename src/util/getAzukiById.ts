import * as fs from 'fs'
import { AzukiJson } from '../collections/azuki'

export const getAzukiById = async (id: number): Promise<AzukiJson> => {
    const data = await fs.promises.readFile('./assets/azuki.json', 'utf-8')
    const azukiJsonArray = JSON.parse(data)["AZUKIS"]
    return azukiJsonArray.find((azukiJson: AzukiJson) => {
      return azukiJson.name == `Azuki #${id}`
    })
}