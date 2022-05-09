import { User } from './User'
import { Company } from './Company'

export interface Marker {
  markerName(): string
  location: {
    lat: number
    lng: number
  }
}

export class CustomMap {
  private map: JQuery<HTMLElement>
  public markers: Marker[]

  constructor(divId: string) {
    this.map = $(`#${divId}`)
    this.markers = []
  }

  addMakrer(marker: Marker): void {
    this.markers.push(marker)
  }

  refresh(): void {
    this.map.html(this.displayMarkers())
  }

  displayMarkers(): string {
    return this.markers
      .map((marker) => {
        return `<b>name</b>: ${marker.markerName()} <br> 
                    <b>lacation</b>: (${marker.location.lat}, ${
          marker.location.lng
        })`
      })
      .join('<hr>')
  }
}
