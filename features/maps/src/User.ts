import faker from 'faker'
import { Marker } from './CustomMap'

export class User implements Marker {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  summary(): string {
    return `
            name: ${this.name}
            | location: (${this.location.lat}, ${this.location.lng})
        `
  }

  markerName(): string {
    return `[User] ${this.name}`
  }
}
