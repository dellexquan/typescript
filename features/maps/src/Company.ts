import faker from 'faker'
import { Marker } from './CustomMap'

export class Company implements Marker {
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  summary(): string {
    return `
            name: ${this.name}
            | location: (${this.location.lat}, ${this.location.lng})
            | catchPhrase: ${this.catchPhrase} 
        `
  }

  markerName(): string {
    return `[Company] ${this.name}`
  }
}
