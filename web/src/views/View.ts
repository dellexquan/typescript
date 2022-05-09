import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {}

    constructor(public parent: Element, public model: T) {
        this.bindModel()
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render()
        })
    }

    bindEvents(fragment: DocumentFragment): void {
        const evnetsMap = this.evnetsMap()
        for (let eventKey in evnetsMap) {
            const [eventName, selector] = eventKey.split(':')

            const elements = fragment.querySelectorAll(selector)

            elements.forEach((element) => {
                element.addEventListener(eventName, evnetsMap[eventKey])
            })
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionMap = this.regionMap()
        for (let key in regionMap) {
            const selector = regionMap[key]
            const element = fragment.querySelector(selector)
            if (element) {
                this.regions[key] = element
            }
        }
    }

    onRender(): void {}

    render(): void {
        this.parent.innerHTML = ''

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()
        this.bindEvents(templateElement.content)
        this.mapRegions(templateElement.content)

        this.onRender()

        this.parent.append(templateElement.content)
    }

    regionMap(): { [key: string]: string } {
        return {}
    }

    evnetsMap(): { [key: string]: () => void } {
        return {}
    }

    abstract template(): string
}
